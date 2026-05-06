export interface UsuarioInputDto {
  id?: number;
  nombreUsuario: string;
  correo: string;
  clave: string;
  activo?: boolean;
}
