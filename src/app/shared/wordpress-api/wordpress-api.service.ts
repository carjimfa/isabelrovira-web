import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {plainToClass} from 'class-transformer';
import {Media} from './media';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {

  constructor(private readonly httpClient: HttpClient) { }

  getMain(): void {
    this.httpClient.get(`${environment.wordpressApiUrl}`).subscribe((res) => {
      this.getPosts().subscribe((posts) => console.log(posts));
    });
  }

  getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(`${environment.wordpressApiUrl}/wp/v2/posts`);
  }

  getLastPost(): Observable<Post> {
    const params = new HttpParams({fromString: 'page=1&per_page=1'});
    return this.httpClient.get<Array<Post>>(`${environment.wordpressApiUrl}/wp/v2/posts`, {params})
      .pipe(
        map((posts) => {
          return posts[0];
        }),
        map((post) => plainToClass(Post, post))
      );
  }

  getMedia(id: number): Observable<Media> {
    return this.httpClient.get<Media>(`${environment.wordpressApiUrl}/wp/v2/media/${id}`)
      .pipe(map((res) => plainToClass(Media, res)));
  }
}
