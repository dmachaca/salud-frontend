import { MatDialog, MatDialogConfig, MatDialogRef } from "@angular/material/dialog";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { FormGroup } from "@angular/forms";
import {CPopConfirmation} from '../shared/components/c-pop-confirmation/c-pop-confirmation';
import {ERROR_ROUTES, HTTP_STATUS} from '../core/constants/constantes';

export function createModal(tipo: number, dialog: MatDialog) {
  return dialog.open(CPopConfirmation, {
    panelClass: "pop-confirmation", width: '400px',
    maxWidth: '98%',
    data: { tipo: tipo },
    autoFocus: false
  });
}

export function createModalOwnMessage(
  tipo: number,
  dialog: MatDialog,
  titulo: string | null,
  mensaje: string,
  config?: MatDialogConfig
): MatDialogRef<CPopConfirmation> {

  const data = { tipo, mensaje, titulo: titulo ?? undefined };

  const baseConfig: MatDialogConfig = {
    panelClass: "pop-confirmation",
    width: '400px',
    maxWidth: '98%',
    data,
    autoFocus: false
  };

  const finalConfig = config ? { ...baseConfig, ...config } : baseConfig;

  return dialog.open(CPopConfirmation, finalConfig);
}

export function handleError(error: HttpErrorResponse, router: Router): void {
  let redirectUrl: string;
  switch (error.status) {
    case HTTP_STATUS.FORBIDDEN:
      redirectUrl = ERROR_ROUTES.FORBIDDEN;
      break;
    case HTTP_STATUS.NOT_FOUND:
      redirectUrl = ERROR_ROUTES.NOT_FOUND;
      break;
    case HTTP_STATUS.TIMEOUT:
      redirectUrl = ERROR_ROUTES.TIMEOUT;
      break;
    case HTTP_STATUS.GONE:
      redirectUrl = ERROR_ROUTES.SERVICE_GONE;
      break;
    case HTTP_STATUS.INTERNAL_SERVER_ERROR:
      redirectUrl = ERROR_ROUTES.SERVER_ISSUE;
      break;
    case HTTP_STATUS.SERVICE_UNAVAILABLE:
      redirectUrl = ERROR_ROUTES.SERVICE_UNAVAILABLE;
      break;
    default:
      redirectUrl = ERROR_ROUTES.GENERIC_ERROR;
      break;
  }
  router.navigate([redirectUrl], { skipLocationChange: true });
}

export function normalizeDate(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function getFormattedDateParts(date: Date) {
  const normalizedDate = normalizeDate(date);
  const day = String(normalizedDate.getDate()).padStart(2, "0");
  const month = String(normalizedDate.getMonth() + 1).padStart(2, "0");
  const year = normalizedDate.getFullYear();
  return { day, month, year };
}

export function formatDateDay(date: Date): string {
  const { day, month, year } = getFormattedDateParts(date);
  return `${day}/${month}/${year}`;
}

export function formatDateYear(date: Date): string {
  const { day, month, year } = getFormattedDateParts(date);
  return `${year}-${month}-${day}`;
}

export function convertStringToDate(dateString: string): Date {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  date.setHours(12, 0, 0, 0);
  return date;
}


export function cleanStringValue(value: string | null): string | null {
  if (value === null || value === undefined) {
    return null;
  }

  const trimmedValue = value.trim();
  return trimmedValue === '' ? null : value;
}
