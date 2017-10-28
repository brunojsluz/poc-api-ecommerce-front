import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'modal-altera-preco',
  templateUrl: './modal-altera-preco.component.html'
})
export class ModalAlteraPrecoComponent {

  public data: any;
  private dialog: MatDialogRef<ModalAlteraPrecoComponent>;

  constructor(dialogRef: MatDialogRef<ModalAlteraPrecoComponent>, @Inject(MAT_DIALOG_DATA) data: any) {
    this.dialog = dialogRef;
    this.data = data;
  }

  public cancelar(): void {
    this.dialog.close();
  }
}
