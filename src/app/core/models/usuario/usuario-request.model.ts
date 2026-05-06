import { PersonaInputDto } from './persona-input.dto';
import { UsuarioInputDto } from './usuario-input.dto';

export interface UsuarioRequest {
  persona: PersonaInputDto;
  usuario: UsuarioInputDto;
}
