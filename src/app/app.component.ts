import {AfterViewInit, Component, HostBinding} from '@angular/core';
import { Theme, ThemeService } from './core/theme.service';
import {ActivatedRoute, ActivationStart, OutletContext, Router, RouterOutlet} from '@angular/router';
import {FADE_IN_TOOLBAR, FADE_TRANSITION} from './shared/animations';
import {WindowService} from './core/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [ FADE_IN_TOOLBAR, FADE_TRANSITION ]
})
export class AppComponent implements AfterViewInit {
  title = 'isabelrovira-web';

  @HostBinding('class')
  cssClass: string = Theme.Light;

  constructor(
    private readonly themeService: ThemeService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly windowService: WindowService
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

  ngAfterViewInit(): void {
    this.windowService.afterViewInit();
  }

  public getRouterOutletState(outlet: RouterOutlet): ActivatedRoute | string {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
