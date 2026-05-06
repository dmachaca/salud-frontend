import { Component, Inject, OnInit } from "@angular/core";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "@angular/material/dialog";
import { CommonModule } from "@angular/common";
import { ModalService } from '../../../core/services/modal.service';

/* =========================
   TYPES
========================= */
export interface PopupData {
  tipo: POPUP_TIPO;
  titulo?: string;
  mensaje?: string;
}

type PopupConfig = {
  title: string;
  message: string;
  icon: string;
  button: POPUP_BUTTONS_TYPE;
};

/* =========================
   ENUMS
========================= */
export enum POPUP_TIPO {
  ERROR,
  SATISFACTORIO,
  ADVERTENCIA,
  VALIDACION,
  ERROR_LOGIN,
  INVALIDO,
  NO_ENCONTRADO,
  REQUIRED,
  WRONG_FORMAT,
  NO_ENCONTRADO_ADVERTENCIA,
  FORMATO_INVALIDO
}

const enum POPUP_TITLES {
  ERROR = "Error",
  SATISFACTORIO = "Éxito",
  ADVERTENCIA = "Confirmación",
  INVALIDO = "Datos incorrectos",
  NO_ENCONTRADO = "No encontrado",
  FORMATO_INVALIDO = "Formato inválido"
}

const enum POPUP_MESSAGES {
  ERROR = "Ocurrió un error durante la operación.",
  SATISFACTORIO = "Operación realizada con éxito.",
  ADVERTENCIA = "¿Está seguro de realizar la operación?",
  ERROR_LOGIN = "Usuario y/o contraseña incorrectos.",
  INVALIDO = "Hay campos incompletos.",
  NO_ENCONTRADO = "No se encontró información."
}

const enum POPUP_VALIDATION_MESSAGE {
  REQUIRED = "Debe completar los campos requeridos",
  WRONG_FORMAT = "Formato incorrecto en los campos"
}

enum POPUP_ICONS {
  ERROR = "icono-x",
  SUCCESS = "icono-check",
  WARNING = "icono-amarillo"
}

enum POPUP_BUTTONS_TYPE {
  OK,
  YESNO
}

/* =========================
   CONFIG TIPADO 🔥
========================= */
const POPUP_CONFIG: Record<POPUP_TIPO, PopupConfig> = {
  [POPUP_TIPO.ERROR]: {
    title: POPUP_TITLES.ERROR,
    message: POPUP_MESSAGES.ERROR,
    icon: POPUP_ICONS.ERROR,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.SATISFACTORIO]: {
    title: POPUP_TITLES.SATISFACTORIO,
    message: POPUP_MESSAGES.SATISFACTORIO,
    icon: POPUP_ICONS.SUCCESS,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.ADVERTENCIA]: {
    title: POPUP_TITLES.ADVERTENCIA,
    message: POPUP_MESSAGES.ADVERTENCIA,
    icon: POPUP_ICONS.WARNING,
    button: POPUP_BUTTONS_TYPE.YESNO
  },
  [POPUP_TIPO.VALIDACION]: {
    title: POPUP_TITLES.ADVERTENCIA,
    message: POPUP_MESSAGES.ADVERTENCIA,
    icon: POPUP_ICONS.WARNING,
    button: POPUP_BUTTONS_TYPE.YESNO
  },
  [POPUP_TIPO.ERROR_LOGIN]: {
    title: POPUP_TITLES.ERROR,
    message: POPUP_MESSAGES.ERROR_LOGIN,
    icon: POPUP_ICONS.ERROR,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.INVALIDO]: {
    title: POPUP_TITLES.INVALIDO,
    message: POPUP_MESSAGES.INVALIDO,
    icon: POPUP_ICONS.WARNING,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.NO_ENCONTRADO]: {
    title: POPUP_TITLES.NO_ENCONTRADO,
    message: POPUP_MESSAGES.NO_ENCONTRADO,
    icon: POPUP_ICONS.ERROR,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.REQUIRED]: {
    title: POPUP_TITLES.INVALIDO,
    message: POPUP_VALIDATION_MESSAGE.REQUIRED,
    icon: POPUP_ICONS.WARNING,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.WRONG_FORMAT]: {
    title: POPUP_TITLES.INVALIDO,
    message: POPUP_VALIDATION_MESSAGE.WRONG_FORMAT,
    icon: POPUP_ICONS.ERROR,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.NO_ENCONTRADO_ADVERTENCIA]: {
    title: POPUP_TITLES.NO_ENCONTRADO,
    message: POPUP_VALIDATION_MESSAGE.REQUIRED,
    icon: POPUP_ICONS.WARNING,
    button: POPUP_BUTTONS_TYPE.OK
  },
  [POPUP_TIPO.FORMATO_INVALIDO]: {
    title: POPUP_TITLES.FORMATO_INVALIDO,
    message: POPUP_VALIDATION_MESSAGE.WRONG_FORMAT,
    icon: POPUP_ICONS.ERROR,
    button: POPUP_BUTTONS_TYPE.OK
  }
};

/* =========================
   COMPONENT
========================= */
@Component({
  selector: "app-c-pop-confirmation",
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: "./c-pop-confirmation.html"
})
export class CPopConfirmation implements OnInit {

  title = "";
  message = "";
  icon = "";
  isYesNo = false;

  constructor(
    public dialogRef: MatDialogRef<CPopConfirmation, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: PopupData,
    private readonly modalService: ModalService
  ) {}

  ngOnInit(): void {
    const config = POPUP_CONFIG[this.data.tipo];

    if (!config) return;

    this.title = this.data.titulo ?? config.title;
    this.message = this.data.mensaje ?? config.message;
    this.icon = config.icon;
    this.isYesNo = config.button === POPUP_BUTTONS_TYPE.YESNO;
  }

  getIcon(): string {
    return `assets/icon-modal/${this.icon}.svg`;
  }

  aceptar(): void {
    this.dialogRef.close(true);
  }

  cerrar(): void {
    this.dialogRef.close(false);
  }

  closeModal(): void {
    this.modalService.closeAllModals();
  }
}
