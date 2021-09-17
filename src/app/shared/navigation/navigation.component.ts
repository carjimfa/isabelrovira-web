import {AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {NavigationService} from './navigation.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

declare var anime: any;

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent implements AfterViewInit, OnDestroy {
  readonly destroyed$ = new Subject();

  constructor(
    private readonly router: Router,
    readonly menuService: NavigationService
  ) {}

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
        e.innerHTML = e.textContent.replace(/./g, '&shy;<span class=\'letter\' style=\'display:inline-block;white-space:pre;\'>$&</span>');
      }
    });
  }
}
