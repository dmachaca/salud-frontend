import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CInput } from '../../../../shared/components/c-input/c-input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CInput
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {

  form: FormGroup;
  submitted = false;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', [Validators.required, Validators.minLength(3)]],
      clave: ['', [Validators.required]]
    });
  }

  login() {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.loading = true;

    setTimeout(() => {
      console.log('LOGIN OK', this.form.value);
      this.router.navigate(['/home']);
    }, 1000);
  }

  onOlvidastePassword() {
    alert('Recuperación de contraseña (demo)');
  }
}
