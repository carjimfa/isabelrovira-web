import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WordpressApiService} from '../../../core/wordpress-api/wordpress-api.service';
import {Post} from '../../../core/wordpress-api/post';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Project} from '../../../core/project';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss']
})
export class SingleProjectComponent implements OnDestroy {
  project$: Subject<Project> = new Subject<Project>();
  destroyed$ = new Subject();
  windowWidth = 0;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly wordpressApiService: WordpressApiService
  ) {
    const id = route.snapshot.params.id;

    this.wordpressApiService.getPostById(id).pipe(
      takeUntil(this.destroyed$)
    ).subscribe((post) => {
      this.project$.next(this.mapToProject(post));
    });
  }

  mapToProject(post: Post): Project {
    return new Project({
      properties: post.acf,
      title: post.title.rendered,
      images: this.getImagesFromPost(post)
    });
  }

  getImagesFromPost(post: Post): Array<string> {
    const document = this.getParsedHtml(post.content.rendered);
    return this.getImagesFromDocument(document);
  }

  getImagesFromDocument(htmlDocument: Document): Array<string> {
    const response = new Array<string>();

    for (let i = 0; i < htmlDocument.images.length; i++) {
      const img = htmlDocument.images.item(i);
      if (!!img) {
        response.push(img.src);
      }
    }

    return response;
  }

  getParsedHtml(source: string): Document {
    const parser = new DOMParser();
    return parser.parseFromString(source, 'text/html');
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.unsubscribe();
  }

  onWindowResize($event: any): void {
    this.windowWidth = $event.target.outerWidth;
  }
}
