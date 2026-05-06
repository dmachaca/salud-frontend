import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private readonly dialog: MatDialog) {}

  closeAllModals(): void {
    const openDialogs = this.dialog.openDialogs;
    openDialogs.forEach(dialog => {
      dialog.close();
    });
  }
}
