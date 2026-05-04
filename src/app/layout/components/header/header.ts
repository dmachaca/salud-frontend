import {Component, HostListener} from '@angular/core';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  showSesion = true;
  isMobile = false;

  usuarioPerfil = 'Densy Machaca';

  constructor() {
    this.checkScreen();
  }

  @HostListener('window:resize')
  checkScreen() {
    this.isMobile = window.innerWidth < 768;
  }

  logout() {
    console.log('Cerrar sesión');
  }

  abrirMenu() {
    console.log('Abrir menú móvil');
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.logout();
    }
  }
}
