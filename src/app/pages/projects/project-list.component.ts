import {Component, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostRequestParams} from '../../core/wordpress-api/post-request-params';
import {Subject} from 'rxjs';
import {Post} from '../../core/wordpress-api/post';
import {WordpressApiService} from '../../core/wordpress-api/wordpress-api.service';
import {map, takeUntil} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnDestroy {
  queryParams?: PostRequestParams;
  posts$: Subject<Array<Post>> = new Subject<Array<Post>>();
  destroyed$ = new Subject();
  pageTitle = '';

  constructor(
    private readonly router: Router,
    private readonly route: ActivatedRoute,
    private readonly apiService: WordpressApiService
  ) {
    this.route.queryParams.subscribe((params) => {
      this.queryParams = new PostRequestParams(params);

      this.apiService.getPosts(this.queryParams).pipe(
        takeUntil(this.destroyed$),
        map((posts) => plainToClass(Post, posts))
      ).subscribe((newPosts) => this.posts$.next(newPosts));
    });

    this.route.params.subscribe((params) => {
      this.pageTitle = params.pageTitle.replace('-', ' & ');
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }
}
