import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { from, Observer, switchMap } from 'rxjs';

import { CInput } from '../../../../shared/components/c-input/c-input';
import { UsuarioService } from '../../../../core/services/usuario.service';
import { RecaptchaService } from '../../../../core/services/recapcha.service';

import {
  AuthOutputDto,
  LoginInputDto
} from '../../../../core/models/auth/auth.model';
import { GenericResponse } from '../../../../core/models/generic-response.model';
import {createModalOwnMessage, handleError} from '../../../../utils/funciones';
import {POPUP_TIPO} from '../../../../core/constants/constantes';
import {MatDialog} from '@angular/material/dialog';
import {PopRegistroUsuario} from '../../components/pop-registro-usuario/pop-registro-usuario';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CInput],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  private fb = inject(FormBuilder);
  private router = inject(Router);
  private usuarioService = inject(UsuarioService);
  private recaptchaService = inject(RecaptchaService);
  private dialog = inject(MatDialog);

  form: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    clave: ['', [Validators.required]]
  });

  submitted = false;
  loading = false;
  bloquear = false;

  /* =========================
     LOGIN
  ========================= */
  login(): void {
    if (this.bloquear) return;

    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Formulario inválido');
      return;
    }

    this.bloquear = true;
    this.loading = true;

    from(this.recaptchaService.execute('login'))
      .pipe(switchMap(this.getLoginSwitchMap()))
      .subscribe(this.getLoginObserver());
  }

  /* =========================
     SWITCHMAP
  ========================= */
  private getLoginSwitchMap(): (recaptcha: string) => ReturnType<UsuarioService['login']> {
    return (recaptcha: string) => {

      const request: LoginInputDto = {
        username: this.form.get('usuario')!.value,
        password: this.form.get('clave')!.value,
        recaptcha
      };

      return this.usuarioService.login(request);
    };
  }

  /* =========================
     OBSERVER
  ========================= */
  private getLoginObserver(): Observer<GenericResponse<AuthOutputDto>> {
    return {
      next: (response) => {

        if (!response.success || !response.data) {
          this.resetState();
          createModalOwnMessage(POPUP_TIPO.ERROR_LOGIN, this.dialog,null, response.message)
          return;
        }

        this.usuarioService.guardarDatosSesion(response.data);

        this.router.navigate(['/dashboard']);

      },

      error: (error: HttpErrorResponse) => {
        this.resetState();
        const mensajeBackend = error.error?.message || 'Ocurrió un error inesperado';
        createModalOwnMessage(
          POPUP_TIPO.ERROR_LOGIN,
          this.dialog,
          null,
          mensajeBackend
        );
        handleError(error, this.router);
      },

      complete: () => {
        this.resetState();
      }
    };
  }

  /* =========================
     UTIL
  ========================= */
  private resetState(): void {
    this.loading = false;
    this.bloquear = false;
  }

  onOlvidastePassword(): void {
    alert('Recuperación de contraseña');
  }

  abrirRegistro() {
    this.dialog.open(PopRegistroUsuario, {
      width: '420px',
      disableClose: true
    });
  }
}
