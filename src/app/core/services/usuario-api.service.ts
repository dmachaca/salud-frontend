import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GenericResponse } from '../models/generic-response.model';
import {UsuarioRequest} from '../models/usuario/usuario-request.model';
import {UsuarioOutputDto} from '../models/usuario/usuario-output.dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioApiService {

  private readonly http = inject(HttpClient);

  private readonly baseUrl =
    `${environment.apiUrl}/${environment.apiVersion}/usuario`;

  registrarUsuario( request: UsuarioRequest ): Observable<GenericResponse<UsuarioOutputDto>> {
    return this.http.post<GenericResponse<UsuarioOutputDto>>(`${this.baseUrl}/registrar`,  request );
  }
}
