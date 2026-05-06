export const SESSION_CONST = {
  TOKEN_NAME: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  PERFIL: 'perfil',
  USUARIO: 'usuario',
  NOMBRE_USUARIO: 'nombreUsuario'
};

export const REGEX_PATTERN = {
  USER: "^[a-zA-Z0-9\\._\\-]*$",
  PASSWORD: "^[^\"\\<\\>\\/\\{\\}\\[\\]\\\\]*$",
  CORREO: "^[0-9a-zA-Z]+(?:[\\.\\-_][0-9a-zA-Z]+)*@[a-zA-Z]+(?:\\.[a-zA-Z]{2,4})+$",
  NUMBER: "^0|[1-9][0-9]*$",
  /** Solo dígitos; vacío permitido; si hay valor, no puede ser únicamente ceros (ej. 00000000000). */
  NUMBER_NOT_ALL_ZEROS: "^(?!0+$)\\d*$",
  MOBILE_PHONE: "^9[0-9]*$",
  TEL_PHONE: "^0[1-9][0-9]*$",
  PASSWORD_CORRECTO: "^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d).*$",
  ADDRESS: "^[a-zA-Z0-9#\\-.,áéíóúÁÉÍÓÚñÑ]+(?: [a-zA-Z0-9#\\-.,áéíóúÁÉÍÓÚñÑ]+)*\\s*$",
  CANTIDAD: "^(0|[1-9][0-9]*)$"
}

export const ALLOWED_KEYS = {
  USER: "[a-zA-Z0-9\\._\\-]",
  PASSWORD: "[^\"\\<\\>\\/\\{\\}\\[\\]\\\\]",
  CORREO: "[0-9a-zA-Z@_\\.\\-]",
  NUMBER: "[0-9]",
  ADDRESS: "[a-zA-Z0-9#\\-\\.,áéíóúÁÉÍÓÚñÑ\\s]"
}

export const ERROR_ROUTES = {
  LOGIN: 'login',
  NOT_FOUND: 'error404',
  TIMEOUT: 'error408',
  FORBIDDEN: 'error403',
  SERVICE_GONE: 'error410',
  SERVER_ISSUE: 'error500',
  SERVICE_UNAVAILABLE: 'error503',
  GENERIC_ERROR: 'errorGenerico'
};

export const HTTP_STATUS = {
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 408,
  GONE: 410,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503
};

export enum TITLES_POP {
  INVALIDO = "Datos incorrectos",
  DATOS_INCOMPLETOS = "Datos incompletos",
  NO_EXISTE_REGISTROS = "No se encontraron registros",
  MAXIMO_MIEMBROS= "Límite de miembros de mesa alcanzado",
  ADVERTENCIA= "Advertencia",
  ATENCION= "ATENCIÓN",
  SELECT_AMBITO= "SELECCIONAR ÁMBITO",
  SELECT_REGION= "SELECCIONAR REGIÓN",
  RESTRICCION= "RESTRICCIÓN",
}

export enum VALIDATION_MESSAGE {
  REQUIRED = "Campo obligatorio.",
  WRONG_FORMAT = "Formato incorrecto.",
  MIN_LENGTH = "El campo debe tener al menos {0} dígitos.",
  MIN_LENGTH_DNI = "El campo debe tener al menos 8 dígitos.",
  MIN_MAX_EQUAL_LENGTH = "El campo debe contener {0} dígitos.",
  MINLENGTH = 'El valor ingresado es demasiado corto.',
  MAXLENGTH = 'El valor ingresado es demasiado largo.',
  RANGE = "La fecha no se encuentra en un rango válido.",
  RANGE_BETWEEN = "La fecha de inicio es mayor que la fecha de fin.",
  RANGE_HOUR_BETWEEN = "La hora de inicio es mayor que la hora de fin.",
  FECHAS_CRUZADAS = "Existen fechas cruzadas.",
  PERFIL_USUARIO = "No se encontró perfil del usuario.",
  USUARIO_INVALIDO= "Usuario no válido",
  INVALIDO = "Hay campos incompletos. Por favor, revíselos antes de continuar.",
  INVALIDO_ADMIN = "Faltan registrar datos requeridos para esta Organización Política.",
  ID_INVALIDO = "Debe ingresar desde una Organización Política.",
  CORREO_INVALIDO = "El correo de confirmación no coincide.",
  MIEMBRO_ACTIVO = "El miembro ya está agregado.",
  MIEMBRO_LISTA = "Debe agregar al menos al miembro con cargo presidente.",
  PRESIDENTE_LISTA = "Debes agregar un presidente.",
  PRESIDENTE_EXISTE = "Ya existe un miembro con el cargo presidente registrado.",
  ERROR_ARCHIVO = "Error al descargar el archivo.",
  ARCHIVO_NO_ADJUNTO = "No se ha encontrado ningún archivo adjunto. Por favor, cargue uno para continuar.",
  FORMATO_INVALIDO = "Formato no permitido. Solo PDF, JPG o PNG.",
  PESO_ARCHIVO_PERMITIDO = "El tamaño máximo permitido para el archivo es de 5 MB.",
  REQUISITOS_PASSWORD_ESTABLECIDOS = "La contraseña no cumple con los requisitos establecidos.",
  CLAVES_NO_COINCIDEN = "Las contraseñas no coinciden. Por favor, verifica e intenta nuevamente.",
  CONFIRMACION_OPERACION = "¿Está seguro de realizar la operación?",
  CONFIRMACION_ELIMINAR = "Los registros posteriores vinculados a este también serán eliminados de forma permanente. ¿Está seguro de realizar la operación?",
  PRESIDENTE_CASILLA = "El presidente no cuenta con casilla electrónica.",
  ERROR_PDF = "Error al descargar el reporte PDF. Por favor, intente de nuevo.",
  ERROR_EXCEL = "Error al descargar el reporte Excel. Por favor, intente de nuevo.",
  ERROR_REPORTE = "Error al descargar el reporte. Inténtalo nuevamente.",
  N_DOCUMENTO_INGRESADO = "No se ha ingresado el N° de documento.",
  CARGO_INGRESADO = "No se ha seleccionado el cargo.",
  LISTA_MAXIMO_6_TITULARES = "Se ha alcanzado el límite máximo de 6 integrantes con el cargo de Titular en el Órgano Electoral Central. No es posible registrar más miembros con este cargo.",
  LISTA_MAXIMO_6_SUPLENTES = "Se ha alcanzado el límite máximo de 6 integrantes con el cargo de Suplente en el Órgano Electoral Central. No es posible registrar más miembros con este cargo.",
  ID_ORGANIZACION_EXIST = "No se ha encontrado un ID de Organización Política.",
  ERROR_MSG_MESA_NO_RECIBIDA = "No se recibió información de la mesa asignada.",
  ERROR_MSG_FORMULA_NO_RECIBIDA = "No se recibió información de los integrantes.",
  NO_DATA_PROCESAR = "No existen datos registrados para procesar o generar el documento.",
  MAXIMO_6_MIEMBROS = "Se alcanzó el número máximo de 6 miembros de mesa. No es posible agregar más.",
  CANDIDATOS_AGREGADO = "Se agregó al candidato satisfactoriamente.",
  LISTA_CANDIDATOS_PRESIDENCIAL = "Se agregó la lista de candidatos satisfactoriamente.",
  LISTA_EDITAR_PRESIDENCIAL = "Se editó la lista de candidatos satisfactoriamente.",
  FORMULA_CANDIDATOS_PRESIDENCIAL = "Se agregó la fórmula satisfactoriamente.",
  FORMULA_EDITAR_PRESIDENCIAL = "Se editó la fórmula satisfactoriamente.",
  ID_ORGANIZACION= "Debe existir un ID de Organización Política.",
  ID_FORMULA = "Debe existir un ID de Fórmula.",
  ID_LISTA = "Debe existir un ID Lista.",
  ID_AMBITO= "Debe existir un ID Ámbito.",
  LISTA_INTEGRANTES_VACIA = "No hay integrantes.",
  DESIGNADO_NO_ENCONTRADO = "No se encontró designado con el ámbito",
  DESIGNADO_ORDEN_MAYOR = "La posición del designado no puede ser mayor a la cantidad de cantidatos que es: ",
  DESIGNADO_POSICION_CERO = "La posición del designado debe ser mayor a 0.",
  DESIGNADO_ORDEN_REPETIDO = "Ya existe un designado en la región con el orden: ",
  DESIGNADO_AGREGADO = "La posición del designado se agregó correctamente.",
  CONFIRMACION_DESIGNADOS= "¿Está seguro de finalizar el registro?",
  GLOSA_ACEPTADA = 'Es necesario aceptar la declaración anterior para continuar con el registro de información.',
  CANCELAR_GUARDADOS = "¿Está seguro de que desea salir?<br>Si realizó cambios, estos no se guardarán al cerrar la ventana.",
  FORMULA_VACIA = "Antes de crear la fórmula, asegúrese de haber registrado todos los candidatos correspondientes.",
  LISTA_VACIA = "Antes de crear la lista, asegúrese de haber registrado todos los candidatos correspondientes.",
  DESIGNADOS_GUARDADO = "Se guardaron los cambios correctamente.",
  DESIGNADOS_FINALIZADO = "Se realizó la configuración de los designados correctamente.",
  AMBITO_SELECCIONAR = "Debe seleccionar un ámbito antes de continuar.",
  REGION_SELECCIONAR = "Debe seleccionar una región antes de continuar.",
  PROVINCIA_SELECCIONAR = "Debe seleccionar una provincia antes de continuar.",
  DISTRITO_SELECCIONAR = "Debe seleccionar un distrito antes de continuar.",
  CAMBIO_MODAL = "¿Desea abandonar la página?<br>Si realizó cambios y no los guardó, estos se perderán. Si no realizó modificaciones, podrá salir sin inconvenientes.",
  USUARIO_EDITADO = "Usuario editado satisfactoriamente.",
  USUARIO_REGISTRADO = "Usuario registrado satisfactoriamente."
};


export const SESSION_KEYS = {
  ID: 'idRepresentante',
};

export const POPUP_TIPO = {
  ERROR: 0,
  SATISFACTORIO: 1,
  ADVERTENCIA: 2,
  VALIDACION: 3,
  ERROR_LOGIN: 4,
  INVALIDO: 5,
  NO_ENCONTRADO: 6,
  REQUIRED: 7,
  WRONG_FORMAT: 8,
  NO_ENCONTRADO_ADVERTENCIA: 9,
  FORMATO_INVALIDO: 10
};

export const USUARIOS = {
  ADMIN: "ADMINISTRADOR REP",
  PARTIDO_POLITICO: "PARTIDO POLITICO REP"
};

export const REFRESH_TOKEN_NAME = "refreshToken";
export const DURATION = 20;
export const INACTIVIDAD = 900;
export const PREFIX = "Bearer ";
export const NUEVA_CLAVE = 1;
export const AUTENTICA_POR_DOMINIO = 1;


export const FASES = {
  FASE1: "FASE 1",
  FASE2: "FASE 2",
  FASE3: "FASE 3",
  FASE4: "FASE 4",
  FASE5: "FASE 5",
  FASE6: "FASE 6",
  FASE7: "FASE 7",
};

export const CARDS = [
  {
    fase: 0,
    iconoMenu: 'iconHome.svg',
    color: 'clr-0',
  },
  {
    fase: 1,
    iconoMenu: 'iconMenuFase1.svg',
    color: 'clr-1',
  },
  {
    fase: 2,
    iconoMenu: 'iconMenuFase2.svg',
    color: 'clr-2',
  },
  {
    fase: 3,
    iconoMenu: 'iconMenuFase3.svg',
    color: 'clr-3',
  },
  {
    fase: 4,
    iconoMenu: 'iconMenuFase4.svg',
    color: 'clr-4',
  },
  {
    fase: 5,
    iconoMenu: 'iconMenuFase5.svg',
    color: 'clr-5',
  },
  {
    fase: 6,
    iconoMenu: 'iconMenuCredenciales.svg',
    color: 'clr-5',
  },
  {
    fase: 7,
    iconoMenu: 'iconMenuAsignacion.svg',
    color: 'clr-5',
  },
];


export const HEADERS_CMS = {
  index: "N°",
  tipoOrganizacionPolitica: "TIPO",
  nombreOrganizacionPolitica: "ORGANIZACIÓN POLÍTICA",
  modalidadEleccion: "MODALIDAD",
  totalMesas: "TOTAL DE MESAS"
};

export const MODULE_PATHS = {
  REPORTES: 'reportes',
  REGISTRO_PERSONEROS: 'registro-personeros',
  REGISTRO_MIEMBROS_MESA: 'registro-mm',
  REGISTRO_ORGANIZACIONES_POLITICAS: 'registro-op',
  REGISTRO_DELEGADOS_GANADORES: 'registro-delegados',
  INICIO: 'inicio',
  GESTION_FASES: 'gestion-fase',
  GESTION_CMS: 'gestion-cms',
  CASILLA_ELECTRONICA: 'casilla-electronica',
  ASIGNACION_CARGO: 'asignacion-cargo',
  ENVIO_CREDENCIALES: 'envio-credenciales',
  REGISTRO_CANDIDATOS: 'registro-candidatos',
}



export const LENGTH = {
  DNI: 8,
  CORREO: 60,
  PHONE: 9,
  DISTRITO: 3,
  NOMBRE_OP: 20,
  DIRECCION: 200
}
export const DOCUMENTO = {
  EXCEL: 'Excel',
  PDF: 'PDF'
}

export const ErrorType = {
  REQUIRED: 'required',
  INVALID_DATE: 'invalidDate',
  DATE_OUT_OF_RANGE: 'dateOutOfRange',
  FECHAS_CRUZADAS: 'fechasCruzadas'
}

export enum ASIGNADO {
  SI = 1,
  NO = 0
}

export enum MODALIDAD {
  AFILIADO = 1,
  AFILIADO_CIUDADANO = 3,
  DELEGADO = 2
}

export const ESTADO_MESA = {
  PENDIENTE: 1,
  PROCESO: 2,
  CULMINADA: 3
}


export const REGEX_CONTENT = {
  FILENAME: /filename="?(.+)"?/
}

export const ESTADO_QUERY = {
  PENDIENTE: 1,
  PROCESO: 2,
  ERROR: 3,
  FINALIZADO: 4,
}


export const TABS_ESTADOS = {
  ESTADO_CERO: 0,
  ESTADO_UNO: 1
}

export const VALORES_DISEÑO = {
  MOBILE: 900,
  START_TIME: 1000
}

export const TIPO_ICONO = {
  ADVERTENCIA: "1",
  RESTRICCION: "2"
};

