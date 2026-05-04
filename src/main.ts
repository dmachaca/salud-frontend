import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { environment } from './environments/environment';

// cargar script dinámicamente
async function loadRecaptchaScript(siteKey: string): Promise<void> {

  if (document.querySelector('script[src*="recaptcha"]')) return;

  const script = document.createElement('script');

  await new Promise<void>((resolve, reject) => {
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;

    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Error cargando reCAPTCHA'));

    document.head.appendChild(script);
  });
}

(async () => {

  let siteKey: string | undefined;

  try {
    const response = await fetch(
      `${environment.apiUrl}/${environment.apiVersion}/recurso/apigoogle`
    );

    if (!response.ok) {
      throw new Error('Error obteniendo siteKey');
    }

    const data = await response.json();

    siteKey = data.api;

  } catch (error) {
    console.warn('Error backend reCAPTCHA, usando fallback');

    siteKey = 'TU_SITE_KEY_AQUI';
  }

  if (!siteKey) {
    console.error('No hay siteKey disponible');
  } else {
    window.__recaptcha_sitekey = siteKey;

    try {
      await loadRecaptchaScript(siteKey);
    } catch (e) {
      console.warn('No se pudo cargar script reCAPTCHA');
    }
  }

  // arrancar Angular
  bootstrapApplication(App, appConfig)
    .catch(err => console.error(err));

})();
