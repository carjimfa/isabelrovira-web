import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  themeState$ = new BehaviorSubject<Theme>(Theme.Light);

  setTheme(t: Theme): void {
    this.themeState$.next(t);
  }
}

export enum Theme {
  Light = 'light-theme',
  Dark = 'dark-theme'
}
