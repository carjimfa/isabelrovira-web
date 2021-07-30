import { Component, HostBinding } from '@angular/core';
import { Theme, ThemeService } from './core/theme.service';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';
import { FADE_IN_TOOLBAR } from './shared/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ FADE_IN_TOOLBAR ]
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
