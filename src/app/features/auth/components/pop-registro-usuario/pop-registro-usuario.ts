import { Component, inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Observer } from 'rxjs';

import { CInput } from '../../../../shared/components/c-input/c-input';

import { createModalOwnMessage } from '../../../../utils/funciones';
import { POPUP_TIPO } from '../../../../core/constants/constantes';
import { GenericResponse } from '../../../../core/models/generic-response.model';
import {UsuarioApiService} from '../../../../core/services/usuario-api.service';

@Component({
  selector: 'app-pop-registro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, CInput],
  templateUrl: './pop-registro-usuario.html',
  styleUrls: ['./pop-registro-usuario.scss']
})
export class PopRegistroUsuario {

  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef<PopRegistroUsuario>);
  private usuarioService = inject(UsuarioApiService);
  private dialog = inject(MatDialog);

  submitted = false;
  loading = false;

  form: FormGroup = this.fb.group({
    nombres: ['', Validators.required],
    apellidoPaterno: ['', Validators.required],
    dni: ['', [Validators.required, Validators.minLength(8)]],
    usuario: ['', Validators.required],
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]]
  });

  /* =========================
     REGISTRAR
  ========================= */
  registrar(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    const request = {
      persona: {
        nombres: this.form.value.nombres,
        apellidoPaterno: this.form.value.apellidoPaterno,
        dni: this.form.value.dni
      },
      usuario: {
        nombreUsuario: this.form.value.usuario,
        correo: this.form.value.correo,
        clave: this.form.value.clave
      }
    };

    this.usuarioService
      .registrarUsuario(request)
      .subscribe(this.getRegistroObserver());
  }

  /* =========================
     OBSERVER (MISMO PATRÓN)
  ========================= */
  private getRegistroObserver(): Observer<GenericResponse<any>> {
    return {
      next: (response) => {

        if (!response.success) {
          this.loading = false;

          createModalOwnMessage(
            POPUP_TIPO.ERROR,
            this.dialog,
            null,
            response.message
          );
          return;
        }
        createModalOwnMessage(
          POPUP_TIPO.SATISFACTORIO,
          this.dialog,
          null,
          response.message
        );

        this.dialogRef.close(true);
      },

      error: (error: HttpErrorResponse) => {
        this.loading = false;

        const mensaje = error.error?.message || 'Error inesperado';

        createModalOwnMessage(
          POPUP_TIPO.ERROR,
          this.dialog,
          null,
          mensaje
        );

        // 🔥 Errores por campo
        if (mensaje.includes('DNI')) {
          this.form.get('dni')?.setErrors({ duplicate: true });
        }

        if (mensaje.toLowerCase().includes('correo')) {
          this.form.get('correo')?.setErrors({ duplicate: true });
        }

        if (mensaje.toLowerCase().includes('usuario')) {
          this.form.get('usuario')?.setErrors({ duplicate: true });
        }
      },

      complete: () => {
        this.loading = false;
      }
    };
  }

  cancelar(): void {
    this.dialogRef.close();
  }

  cerrar(): void {
    this.dialogRef.close();
  }
}
