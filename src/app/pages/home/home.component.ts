import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { WordpressApiService } from '../../shared/wordpress-api/wordpress-api.service';
import {Post} from '../../shared/wordpress-api/post';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  post$: Subject<Post> = new Subject<Post>();

  @ViewChild('mainArticle')
  mainArticle?: ElementRef;

  constructor(readonly wordpressApiService: WordpressApiService) { }

  ngOnInit(): void {
    this.wordpressApiService.getLastPost().subscribe((res) => {
      this.post$.next(res);
      this.wordpressApiService.getMedia(res.featured_media).subscribe((featuredImage) => {
        if (this.mainArticle) {
          this.mainArticle.nativeElement.style.backgroundImage = `url('${featuredImage.source_url}')`;
          this.mainArticle.nativeElement.style.backgroundPosition = 'center';
          this.mainArticle.nativeElement.style.backgroundRepeat = 'no-repeat';
          this.mainArticle.nativeElement.style.backgroundSize = '60% auto';
        }
      });
    });
  }
}
