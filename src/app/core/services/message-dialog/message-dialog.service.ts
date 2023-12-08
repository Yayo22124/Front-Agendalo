import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/components/message-dialog/message-dialog.component';
@Injectable({
  providedIn: 'root',
})
export class MessageDialogService {
  constructor(private dialog: MatDialog) {}

  openSuccessDialog(message: string) {
    this.dialog.open(MessageDialogComponent, {
      data: { message, type: 'success' },
    });
  }

  openErrorDialog(message: string) {
    this.dialog.open(MessageDialogComponent, {
      data: { message, type: 'error' },
    });
  }
}
