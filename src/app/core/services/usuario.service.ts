import { inject, Injectable, signal, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SESSION_CONST } from '../constants/constantes';
import { AuthOutputDto, LoginInputDto } from '../models/auth.model';
import { GenericResponse } from '../models/generic-response.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private readonly http = inject(HttpClient);
  private readonly router = inject(Router);
  private readonly baseUrl: string = `${environment.apiUrl}/${environment.apiVersion}/auth`;

  private _isAuthenticated = signal<boolean>(!!sessionStorage.getItem(SESSION_CONST.TOKEN_NAME));
  public isAuthenticated = computed(() => this._isAuthenticated());

  guardarDatosSesion(userData: AuthOutputDto) {
    sessionStorage.setItem(SESSION_CONST.TOKEN_NAME, userData.accessToken);
    sessionStorage.setItem(SESSION_CONST.REFRESH_TOKEN, userData.refreshToken);
    this._isAuthenticated.set(true);
  }

  // ... (otros métodos de guardado de perfil se mantienen igual)

  obtenerItem(key: string): string | null {
    return sessionStorage.getItem(key);
  }

  logout(): void {
    const refreshToken = this.obtenerItem(SESSION_CONST.REFRESH_TOKEN);
    if (refreshToken) {
      this.http.post(`${this.baseUrl}/logout`, { refreshToken }).subscribe();
    }
    sessionStorage.clear();
    this._isAuthenticated.set(false);
    this.router.navigate(['/auth/login']);
  }

  login(loginInputDto: LoginInputDto): Observable<GenericResponse<AuthOutputDto>> {
    return this.http.post<GenericResponse<AuthOutputDto>>(`${this.baseUrl}/login`, loginInputDto).pipe(
      tap(res => {
        if (res.success && res.data) {
          this.guardarDatosSesion(res.data);
        }
      })
    );
  }
}
