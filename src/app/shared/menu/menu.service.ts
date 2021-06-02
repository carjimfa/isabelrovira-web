import { Injectable } from '@angular/core';
import { MenuComponent } from './menu.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { WordpressApiService } from '../../core/wordpress-api/wordpress-api.service';
import { MenuItem } from '../../core/wordpress-api/menu-item';

@Injectable({providedIn: 'root'})
export class MenuService {
  isOpened$ = new BehaviorSubject<boolean>(false);
  menuItems = new Array<MenuItem>();

  private _dialogRef?: MatDialogRef<MenuComponent>;

  get isOpened(): boolean {
    return this.isOpened$.value;
  }

  constructor(
    private readonly dialog: NgDialogAnimationService,
    private readonly wordpressApiService: WordpressApiService
  ) {}

  open(): void {
    this.openMenuDialog();
    this.isOpened$.next(true);
  }

  close(): void {
    this._dialogRef?.close();
    this.isOpened$.next(false);
  }

  getMenuItems(): void {
    this.wordpressApiService.getMenuItems()
      .subscribe((res) => {
        this.menuItems = res;
      });
  }

  private openMenuDialog(): void {
    this._dialogRef = this.dialog.open(MenuComponent, {
      width: '100vw',
      height:  '100vh',
      maxWidth: '100vw',
      maxHeight: '100vh',
      hasBackdrop: false,
      panelClass: 'menu-container',
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
