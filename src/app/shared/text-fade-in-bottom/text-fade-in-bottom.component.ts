import {AfterViewInit, Component, Input } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-text-fade-in-bottom',
  templateUrl: './text-fade-in-bottom.component.html',
  styleUrls: ['./text-fade-in-bottom.component.scss']
})
export class TextFadeInBottomComponent implements AfterViewInit {
  private _text = '';
  private firstRender = false;

  @Input()
  get text(): string {
    return this._text;
  }
  set text(value: string) {
    console.log('set text');
    console.log(value);
    if (this._text !== value) {
      this._text = value;
      if (this.firstRender) {
        this.clearSpans(value);
        this.animateText();
      }
    }
  }

  @Input()
  height = 110;

  @Input()
  textClass = 'mat-display-4';

  get style(): string {
    if (this.height > -1) {
      return 'height: ' + this.height + 'px;';
    }

    return 'height: auto;';
  }

  ngAfterViewInit(): void {
    this.animateText();
    this.firstRender = true;
  }

  private clearSpans(text: string): void {
    const textWrapper = document.querySelector('.text-wrapper');
    if (!!textWrapper && !!textWrapper.textContent) {
      textWrapper.textContent = text;
    }
  }

  private animateText(): void {
    const textWrapper = document.querySelector('.text-wrapper');
    if (!!textWrapper && !!textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        '&shy;<span class=\'letter\' style=\'display:inline-block;\'>$&</span>'
      );

      anime.timeline({loop: false})
        .add({
          targets: '.text-wrapper .letter',
          translateY: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeOutExpo',
          duration: 1200,
          delay: (el: any, i: any) => 250 + 30 * i,
        });
    }
  }
}
