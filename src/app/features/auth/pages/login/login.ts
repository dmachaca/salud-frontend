import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CInput } from '../../../../shared/components/c-input/c-input';
import { switchMap, from, finalize } from 'rxjs';

import {UsuarioService} from '../../../../core/services/usuario.service';
import {RecaptchaService} from '../../../../core/services/recapcha.service';
import {AuthOutputDto, LoginInputDto} from '../../../../core/models/auth.model';
import {GenericResponse} from '../../../../core/models/generic-response.model';

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

  form: FormGroup = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(3)]],
    clave: ['', [Validators.required]]
  });

  submitted = false;
  loading = false;

  login() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    from(this.recaptchaService.execute('login'))
      .pipe(
        switchMap((recaptcha: string) => {

          const request: LoginInputDto = {
            username: this.form.value.usuario!,
            password: this.form.value.clave!,
            recaptcha
          };

          return this.usuarioService.login(request);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe({
        next: (res: GenericResponse<AuthOutputDto>) => {

          if (!res.success || !res.data) {
            alert(res.message);
            return;
          }

          this.usuarioService.guardarDatosSesion(res.data);

          this.router.navigate(['/dashboard']);
        },

        error: (err) => {
          console.error(err);

          // manejo elegante
          if (err?.message?.includes('recaptcha')) {
            alert('Error con reCAPTCHA. Intente nuevamente.');
          } else {
            alert('Error en el login');
          }
        }
      });
  }
  onOlvidastePassword() {
    alert('Recuperación de contraseña (demo)');
  }
}
