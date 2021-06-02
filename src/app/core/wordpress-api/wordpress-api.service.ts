import {Injectable} from '@angular/core';
import {Post} from './post';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Media} from './media';
import {ApiService} from '../api.service';
import {PostOrderByAttribute, PostRequestParams} from './post-request-params';
import {Order} from '../order.enum';
import {MenuItem} from './menu-item';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {
  private readonly apiVersion = 'v2';
  private readonly postsUrlSlug = 'posts';
  private readonly mediaUrlSlug = 'media';
  private readonly menuItemUrlSlug = 'menu-item';

  get postsEndpoint(): string {
    return this.buildEndpointUrl(this.postsUrlSlug);
  }

  get mediaEndpoint(): string {
    return this.buildEndpointUrl(this.mediaUrlSlug);
  }

  constructor(private readonly apiService: ApiService) { }

  buildEndpointUrl(entityUrl: string): string {
    return `${environment.wordpressApiUrl}/wp/${this.apiVersion}/${entityUrl}`;
  }

  getPosts(params: PostRequestParams = {}): Observable<Array<Post>> {
    return this.apiService.getList<Post, PostRequestParams>(this.postsEndpoint, params);
  }

  getPostById(id: number | string): Observable<Post> {
    return this.apiService.get<Post>(this.postsEndpoint, id.toString())
      .pipe(map((res) => plainToClass(Post, res)));
  }

  getLastPost(): Observable<Post> {
    const params = new PostRequestParams({
      page: 1,
      per_page: 1,
      orderBy: PostOrderByAttribute.date,
      order: Order.Desc
    });

    return this.apiService.getList<Post, PostRequestParams>(this.postsEndpoint, params)
      .pipe(
        map((posts) => {
          return posts && posts.length ? posts[0] : null;
        }),
        map((post) => plainToClass(Post, post))
      );
  }

  getMedia(id: number): Observable<Media> {
    return this.apiService.get<Media>(this.mediaEndpoint, id.toString())
      .pipe(map((res) => plainToClass(Media, res)));
  }
}
