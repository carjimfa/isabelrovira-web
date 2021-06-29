import { Injectable } from '@angular/core';
import { MenuComponent } from './menu.component';
import { NgDialogAnimationService } from 'ng-dialog-animation';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class MenuService {
  isOpened$ = new BehaviorSubject<boolean>(false);

  private _dialogRef?: MatDialogRef<MenuComponent>;

  menuItemGroups: Array<IMenuItemGroup> = [
    {
      order: 0,
      menuItems: [
        {
          label: 'editorial',
          cssClass: 'editorial',
          routerLink: ['projects/editorial'],
          queryParams: {categories: [2]},
          uppercase: true
        },
        {
          label: 'commercial',
          cssClass: 'commercial',
          routerLink: ['projects/lifestyle-portraits'],
          queryParams: {categories: [3]},
          uppercase: true
        },
        {
          label: 'lifestyle&portraits',
          cssClass: 'lifestyle',
          routerLink: ['projects/lifestyle-portraits'],
          queryParams: {categories: [4]},
          uppercase: true
        }
      ]
    },
    {
      order: 1,
      menuItems: [
        {
          label: 'personal',
          cssClass: 'personal',
          routerLink: ['personal'],
        }
      ]
    },
    {
      order: 2,
      menuItems: [
        {
          cssClass: 'prints',
          label: 'prints',
          routerLink: ['prints']
        },
        {
          label: 'about',
          cssClass: 'about',
          routerLink: ['about']
        }
      ]
    }
  ];

  get isOpened(): boolean {
    return this.isOpened$.value;
  }

  constructor(
    private readonly dialog: NgDialogAnimationService
  ) {}

  open(): void {
    this.openMenuDialog();
    this.isOpened$.next(true);
  }

  close(): void {
    this._dialogRef?.close();
    this.isOpened$.next(false);
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

export interface IMenuItemGroup {
  menuItems: Array<IMenuItem>;
  order: number;
}

export interface IMenuItem {
  routerLink?: Array<string | number>;
  queryParams?: {categories: Array<number>};
  label: string;
  cssClass: string;
  uppercase?: boolean;
}
