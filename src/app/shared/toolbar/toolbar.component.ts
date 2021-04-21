import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private readonly dialog: MatDialog) {
  }

  openMenu(): void {
    this.dialog.open(MenuComponent, {
      width: '100vw',
      height:  '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      panelClass: 'menu'
    });
  }
}
