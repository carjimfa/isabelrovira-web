import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class WindowService {
  windowWidth = 0;
  mobileThreshold = 960;

  get isMobile(): boolean {
    return this.windowWidth <= this.mobileThreshold;
  }

  constructor() {
    window.onresize = (evt) => this.onWindowResize(evt);
  }

  afterViewInit(): void {
    this.windowWidth = document.body.clientWidth;
  }

  private onWindowResize($event: any): void {
    console.log($event);
    this.windowWidth = $event.target.outerWidth;
  }
}
