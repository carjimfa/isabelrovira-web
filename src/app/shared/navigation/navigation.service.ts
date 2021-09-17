import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class NavigationService {
  menuItemGroups: Array<IMenuItemGroup> = [
    {
      order: 0,
      menuItems: [
        {
          label: 'editorial',
          cssClass: 'editorial',
          routerLink: ['/projects/editorial'],
          queryParams: {categories: [2]},
          uppercase: true
        },
        {
          label: 'commercial',
          cssClass: 'commercial',
          routerLink: ['/projects/commercial'],
          queryParams: {categories: [3]},
          uppercase: true
        },
        {
          label: 'lifestyle&portraits',
          cssClass: 'lifestyle',
          routerLink: ['/projects/lifestyle-portraits'],
          queryParams: {categories: [4]},
          uppercase: true
        }
      ]
    },
    {
      order: 1,
      menuItems: [
        {
          label: 'about',
          cssClass: 'about',
          routerLink: ['/about']
        }
      ]
    }
  ];

  get isOpened(): boolean {
    return this.router.url.includes('/menu');
  }

  constructor(private readonly router: Router) {}
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
