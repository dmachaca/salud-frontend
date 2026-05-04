import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
// 1. Importamos las herramientas HTTP
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import {authInterceptor} from './core/interceptors/auth.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    // 2. Agregamos el cliente HTTP y preparamos el terreno para los interceptores
    provideHttpClient(
      withInterceptors([authInterceptor ]))
  ]
};
