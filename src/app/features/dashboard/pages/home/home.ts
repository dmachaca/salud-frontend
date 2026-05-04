import { Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import {NgClass} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatIconModule,
    NgClass
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  userName = 'Densy';

  constructor(private router: Router) {}

  services = [
    {
      icon: 'add_circle',
      label: 'Solicitar citas',
      color: 'green',
      path: '/dashboard/citas/nueva'
    },
    {
      icon: 'grid_view',
      label: 'Mis citas',
      color: 'light-green',
      path: '/dashboard/citas'
    },
    {
      icon: 'folder',
      label: 'Mis exámenes',
      color: 'purple',
      path: '/dashboard/examenes'
    },
    {
      icon: 'videocam',
      label: 'Dr. Online',
      color: 'orange',
      path: '/dashboard/online'
    }
  ];

  go(path: string) {
    this.router.navigate([path]);
  }

}
