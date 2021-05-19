import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../core/wordpress-api/post';
import {Subject} from 'rxjs';
import {WordpressApiService} from '../../core/wordpress-api/wordpress-api.service';

@Component({
  selector: 'app-project-cover',
  templateUrl: './project-cover.component.html',
  styleUrls: ['./project-cover.component.scss']
})
export class ProjectCoverComponent implements OnInit {

  @Input()
  post: Post = new Post();

  featuredImageSrc$ = new Subject<string>();

  constructor(private readonly wordpressApiService: WordpressApiService) {}

  ngOnInit(): void {
    this.wordpressApiService.getMedia(this.post.featured_media).subscribe((featuredImage) => {
      this.featuredImageSrc$.next(featuredImage.source_url);
    });
  }
}
