import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { SESSION_CONST } from "../constants/constantes";

export const noAuthGuard: CanActivateFn = () => {

  const router = inject(Router);
  const token = sessionStorage.getItem(SESSION_CONST.TOKEN_NAME);

  if (token) {
    return router.createUrlTree(['/dashboard']);
  }

  return true;
};
