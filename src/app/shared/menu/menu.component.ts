import {AfterViewInit, Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {PostRequestParams} from '../../core/wordpress-api/post-request-params';
declare var anime: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  constructor(
    private readonly dialogRef: MatDialogRef<MenuComponent>,
    private readonly router: Router
  ) {}

  divideInSpan(): void {
    const textWrappers = document.querySelectorAll('.menu__sides__navigation mat-list-item a');
    textWrappers.forEach((e) => {
      if (!!e && !!e.textContent) {
        e.innerHTML = e.textContent.replace(/\S/g, '<span class=\'letter\' style=\'display:inline-block;\'>$&</span>');
      }
    });
  }

  ngAfterViewInit(): void {
    this.divideInSpan();

    const elements = [
      'editorial',
      'commercial',
      'lifestyle',
      'personal',
      'prints',
      'about'
    ];

    elements.forEach((elementClass) => {
      anime.timeline({loop: false})
        .add({
          targets: `.menu__sides__navigation mat-list-item .${ elementClass } .letter`,
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
  }

  closeMenu(): void {
    this.dialogRef.close();
  }

  goToEditorial(): void {
    const params = new PostRequestParams({
      categories: ['2']
    });

    this.router.navigate(['projects'], {
      queryParams: params,
      queryParamsHandling: 'merge'
    });

    this.closeMenu();
  }
}
