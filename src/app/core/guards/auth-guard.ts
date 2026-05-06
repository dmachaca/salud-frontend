import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { ERROR_ROUTES, SESSION_CONST } from "../constants/constantes";

export const authGuard: CanActivateFn = () => {

  const router = inject(Router);
  const token = sessionStorage.getItem(SESSION_CONST.TOKEN_NAME);

  if (!token) {
    return router.createUrlTree([ERROR_ROUTES.LOGIN]);
  }

  try {
    const payload = JSON.parse(atob(token.split('.')[1]));

    if (payload.exp * 1000 < Date.now()) {
      sessionStorage.clear();
      return router.createUrlTree([ERROR_ROUTES.LOGIN]);
    }

    return true;

  } catch (e) {
    sessionStorage.clear();
    return router.createUrlTree([ERROR_ROUTES.LOGIN]);
  }
};
