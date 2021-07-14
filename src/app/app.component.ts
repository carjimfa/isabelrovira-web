import {AfterViewInit, Component, HostBinding, OnInit} from '@angular/core';
import {WordpressApiService} from './core/wordpress-api/wordpress-api.service';
import {MenuService} from './shared/menu/menu.service';
import {Theme, ThemeService} from './core/theme.service';
import {ActivatedRoute, ActivationStart, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'isabelrovira-web';

  @HostBinding('class')
  cssClass: string = Theme.Light;

  constructor(
    private readonly themeService: ThemeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {
    this.themeService.themeState$.subscribe((t) => {
      this.cssClass = t;
    });

    this.router.events.subscribe((e) => {
      if (e instanceof ActivationStart) {
        const d = e.snapshot.data;
        if (d && d.theme && d.theme) {
          this.themeService.setTheme(d.theme);
        } else {
          this.themeService.setTheme(Theme.Light);
        }
      }
    });
  }
}
