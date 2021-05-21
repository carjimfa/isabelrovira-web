import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
import {NgDialogAnimationService} from 'ng-dialog-animation';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(private readonly dialog: NgDialogAnimationService) {
  }

  openMenu(): void {
    this.dialog.open(MenuComponent, {
      width: '100vw',
      height:  '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      panelClass: 'menu',
      animation: {
       incomingOptions: {
         keyframes: [
           { opacity: '0' },
           { opacity: '1' }
         ],
         keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 }
       },
               outgoingOptions: {
         keyframes: [
           { opacity: '1' },
           { opacity: '0' }
         ],
         keyframeAnimationOptions: { easing: 'ease-in-out', duration: 500 }
       }
     },
    });
  }
}
