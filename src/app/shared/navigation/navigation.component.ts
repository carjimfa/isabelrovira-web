import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {IMenuItem, NavigationService} from './navigation.service';
import {filter, pairwise, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Location} from '@angular/common';
import {WindowService} from '../../core/window.service';
import {FADE_TRANSITION} from '../animations';

declare var anime: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [FADE_TRANSITION],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  readonly destroyed$ = new Subject();

  isMenuItemActive(item: IMenuItem): boolean {
    return !!item.routerLink && item.routerLink[0] && this.menuService.currentUrl
      ? this.menuService.currentUrl.includes(item.routerLink[0].toString())
      : false;
  }

  constructor(
    private readonly router: Router,
    readonly menuService: NavigationService,
    readonly windowService: WindowService
  ) {
  }

  ngAfterViewInit(): void {
    const elements = [
      'editorial',
      'commercial',
      'lifestyle',
      'personal',
      'prints',
      'about'
    ];

    //this.divideInSpan();

    elements.forEach((elementClass) => {
      const selector = `.${ elementClass }`;

      anime.timeline({loop: false})
        .add({
          targets: selector,
          translateY: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 750,
          delay: (el: any, i: any) => {
            return 200 + 10 * i;
          },
        });
    });


    anime.timeline({loop: false})
      .add({
        targets: `app-toolbar`,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 1200
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  divideInSpan(): void {
    const textWrappers = document.querySelectorAll('.menu__sides__navigation mat-list-item h1 a');
    textWrappers.forEach((e) => {
      if (!!e && !!e.textContent) {
        e.innerHTML = e.textContent.replace(/./g, '<span class=\'letter\' style=\'display:inline-block;white-space:pre;\'>$&</span>&shy;');
      }
    });
  }
}
