import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {Router, RoutesRecognized} from '@angular/router';
import {Location, PopStateEvent} from '@angular/common';
import {filter, pairwise} from 'rxjs/operators';

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

  currentUrl?: string;

  get isOpened(): boolean {
    return this.router.url.includes('/menu');
  }

  constructor(
    private readonly router: Router,
    private readonly location: Location
  ) {
    this.location.subscribe((s) => {
      this.router.events
        .pipe(
          filter(e => e instanceof RoutesRecognized),
          pairwise()
        )
        .subscribe((event: any[]) => {
          this.currentUrl = event[0].urlAfterRedirects;
        });
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
