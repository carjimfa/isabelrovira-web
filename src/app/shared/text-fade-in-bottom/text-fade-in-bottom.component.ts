import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {animate, animateChild, state, style, transition, trigger} from '@angular/animations';
declare var anime: any;

@Component({
  selector: 'app-text-fade-in-bottom',
  templateUrl: './text-fade-in-bottom.component.html',
  styleUrls: ['./text-fade-in-bottom.component.scss']
})
export class TextFadeInBottomComponent implements AfterViewInit {
  @Input()
  text = '';

  get splitTextInHtml(): string {
    return this.text.split('').map((s) => {
      return `<span class='letter'>${s}</span>`;
    }).join('');
  }

  ngAfterViewInit(): void {
    const textWrapper = document.querySelector('.text-wrapper');
    if (!!textWrapper && !!textWrapper.textContent) {
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\' style=\'display:inline-block;\'>$&</span>');

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
