import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { RecaptchaWindow } from '../../types/recaptcha.types';

@Injectable({
  providedIn: 'root'
})
export class RecaptchaService {

  private readonly badgeSelector = '.grecaptcha-badge';
  private readonly maxAttempts = 20;
  private readonly checkInterval = 100;

  private get win(): RecaptchaWindow {
    return window as unknown as RecaptchaWindow;
  }

  constructor(@Inject(PLATFORM_ID) private readonly platformId: object) {}

  execute(action: string): Promise<string> {
    return new Promise((resolve, reject) => {

      if (!isPlatformBrowser(this.platformId)) {
        reject(new Error('reCAPTCHA requiere navegador'));
        return;
      }

      const siteKey = this.win.__recaptcha_sitekey;
      const grecaptcha = this.win.grecaptcha;

      if (!siteKey) {
        reject(new Error('No se encontró siteKey'));
        return;
      }

      if (!grecaptcha) {
        reject(new Error('reCAPTCHA no cargado'));
        return;
      }

      grecaptcha.ready(() => {
        grecaptcha.execute(siteKey, { action })
          .then((token: string) => resolve(token))
          .catch((err: unknown) => {
            const message = err instanceof Error ? err.message : String(err);
            reject(new Error(`reCAPTCHA error: ${message}`));
          });
      });
    });
  }

  async mostrarCaptcha(): Promise<void> {
    await this.waitForBadge((badge) => badge.classList.add('visible'));
  }

  async ocultarCaptcha(): Promise<void> {
    await this.waitForBadge((badge) => badge.classList.remove('visible'));
  }

  private waitForBadge(
    callback: (badge: HTMLElement) => void
  ): Promise<void> {

    return new Promise((resolve) => {
      let attempts = 0;

      const check = () => {
        const badge = document.querySelector(this.badgeSelector);

        if (badge instanceof HTMLElement) {
          callback(badge);
          resolve();
        } else if (attempts++ < this.maxAttempts) {
          setTimeout(check, this.checkInterval);
        } else {
          resolve();
        }
      };

      check();
    });
  }
}
