import { Component, OnInit } from '@angular/core';
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

  constructor(readonly wordpressApiService: WordpressApiService) { }

  ngOnInit(): void {
    this.wordpressApiService.getLastPost().subscribe((res) => {
      this.post$.next(res);
    });
  }
}
