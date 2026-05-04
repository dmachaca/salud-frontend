export interface Grecaptcha {
  ready(callback: () => void): void;
  execute(siteKey: string, options: { action: string }): Promise<string>;
}

export interface RecaptchaWindow extends Window {
  grecaptcha: Grecaptcha;
  __recaptcha_sitekey: string;
}
