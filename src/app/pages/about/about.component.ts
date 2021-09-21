import {Component, HostBinding, OnInit} from '@angular/core';
import {WordpressApiService} from '../../core/wordpress-api/wordpress-api.service';
import {environment} from '../../../environments/environment';
import {Subject} from 'rxjs';
import {Post} from '../../core/wordpress-api/post';
import {Media} from '../../core/wordpress-api/media';
import {Theme, ThemeService} from '../../core/theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  aboutPage$: Subject<Post> = new Subject<Post>();
  featuredImage$: Subject<Media> = new Subject<Media>();

  @HostBinding('class.dark-theme') isDarkTheme = true;

  constructor(private readonly wordpressApiService: WordpressApiService) {}

  ngOnInit(): void {
    this.wordpressApiService.getPage(environment.aboutPageId).subscribe((res) => {
      this.aboutPage$.next(res);
      this.wordpressApiService.getMedia(res.featured_media).subscribe((res) => {
        this.featuredImage$.next(res);
      });
    });
  }

}
