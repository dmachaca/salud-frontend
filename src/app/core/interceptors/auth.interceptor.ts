import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { SESSION_CONST } from '../constants/constantes';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const usuarioService = inject(UsuarioService);

  // Obtenemos el token directamente del storage para asegurar que sea el más reciente
  const token = usuarioService.obtenerItem(SESSION_CONST.TOKEN_NAME);

  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
