import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WordpressApiService} from '../../shared/wordpress-api/wordpress-api.service';
import {Post} from '../../shared/wordpress-api/post';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnDestroy {
  post$: Subject<Post> = new Subject<Post>();
  destroyed$ = new Subject();

  constructor(
    private readonly route: ActivatedRoute,
    private readonly wordpressApiService: WordpressApiService
  ) {
    const id = route.snapshot.params.id;

    this.wordpressApiService.getSinglePost(id).pipe(
      takeUntil(this.destroyed$)
    ).subscribe((post) => this.post$.next(post));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

}
