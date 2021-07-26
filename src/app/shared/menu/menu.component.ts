import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MenuService} from './menu.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

declare var anime: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit, AfterViewInit, OnDestroy {
  readonly destroyed$ = new Subject();

  constructor(
    private readonly router: Router,
    readonly menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      takeUntil(this.destroyed$),
      filter((e) => e instanceof NavigationEnd)
    ).subscribe((e) => {
      if (this.menuService.isOpened) {
        this.closeMenu();
      }
    });
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

    this.divideInSpan();

    elements.forEach((elementClass) => {
      const selector = `.${ elementClass } .letter`;

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
        targets: `mat-divider`,
        translateY: [40, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 750,
        delay: (el: any, i: any) => {
          return 250;
        },
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
        e.innerHTML = e.textContent.replace(/\S/g, '<span class=\'letter\' style=\'display:inline-block;\'>$&</span>');
      }
    });
  }

  closeMenu(): void {
    this.menuService.close();
  }
}
