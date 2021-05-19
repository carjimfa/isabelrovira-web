import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { WordpressApiService } from '../../core/wordpress-api/wordpress-api.service';
import {Post} from '../../core/wordpress-api/post';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  post$: Subject<Post> = new Subject<Post>();

  featuredImageSrc$ = new Subject<string>();

  @ViewChild('mainArticle')
  mainArticle?: ElementRef;

  constructor(readonly wordpressApiService: WordpressApiService) { }

  ngOnInit(): void {
    this.wordpressApiService.getLastPost().subscribe((res) => {
      this.post$.next(res);
    });
  }
}
