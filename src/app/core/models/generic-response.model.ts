export class GenericResponse<T = any> {
  success: boolean;
  titulo: string;
  tipoIcono: string;
  message: string;
  data: T;
  empty: boolean;
  messageInterno?: string;

  constructor() {
    this.success = false;
    this.titulo = '';
    this.tipoIcono = '';
    this.message = '';
    this.empty = true;
    // @ts-ignore
    this.data = null;
  }
}
