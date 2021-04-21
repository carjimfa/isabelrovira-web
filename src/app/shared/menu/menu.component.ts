import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  constructor(private readonly dialogRef: MatDialogRef<MenuComponent>) { }

  closeMenu(): void {
    this.dialogRef.close();
  }
}
