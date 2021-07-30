import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/wordpress-api/post';
import {Subject, timer} from 'rxjs';
import {WordpressApiService} from '../../core/wordpress-api/wordpress-api.service';
import { FADE_IN_CONTENT } from '../animations';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.component.html',
  styleUrls: ['./project-cover.component.scss'],
  animations: [
    FADE_IN_CONTENT,
    trigger('fadeIn', [
      state('hidden', style({
        opacity: 0
      })),
      state('shown', style({
        opacity: 1
      })),
      transition('hidden <=> shown', [
        animate('.65s')
      ]),
      ]
    )
  ]
})
export class ProjectCoverComponent implements OnInit {

  @Input()
  post: Post = new Post();

  @Input()
  styleHeight = 'calc(100vh - 96px)';

  featuredImageSrc$ = new Subject<string>();

  isShownImage = false;
  isShownTitle = false;

  get headlineState(): string {
    return this.isShownTitle ? 'shown' : 'hidden';
  }

  constructor(private readonly wordpressApiService: WordpressApiService) {}

  ngOnInit(): void {
    this.wordpressApiService.getMedia(this.post.featured_media).subscribe((featuredImage) => {
      this.featuredImageSrc$.next(featuredImage.source_url);
      this.isShownImage = true;
      timer(1000).subscribe(() => this.isShownTitle = true);
    });
  }

}
