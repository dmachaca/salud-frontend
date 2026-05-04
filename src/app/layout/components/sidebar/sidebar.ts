import { Component } from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    MatIcon
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  userName = 'Densy Machaca';

  menu = [
    { icon: 'home', label: 'Inicio', path: '/dashboard' },
    { icon: 'add_circle', label: 'Solicitar citas', path: '/dashboard/citas' },
    { icon: 'grid_view', label: 'Mis citas', path: '/dashboard/mis-citas' },
    { icon: 'folder', label: 'Mis exámenes', path: '/dashboard/examenes' },
    { icon: 'videocam', label: 'Dr. Online', path: '/dashboard/online' }
  ];

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }

  isActive(path: string): boolean {
    return this.router.url === path;
  }

  logout() {
    this.router.navigate(['/auth']);
  }
}
