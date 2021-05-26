import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import {MenuService} from '../menu/menu.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(readonly menuService: MenuService) {
  }

  onMenuButtonClicked(): void {
    if (this.menuService.isOpened) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  }

  private openMenu(): void {
    this.menuService.open();
  }

  private closeMenu(): void {
    this.menuService.close();
  }
}
