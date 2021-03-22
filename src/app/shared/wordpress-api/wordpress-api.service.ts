import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WordpressApiService {

  constructor(private readonly httpClient: HttpClient) { }

  getMain(): void {
    this.httpClient.get(`${environment.wordpressApiUrl}`).subscribe((res) => {
      console.log(res);
      this.getPosts().subscribe((posts) => console.log(posts));
    });
  }

  getPosts(): Observable<Array<Post>> {
    return this.httpClient.get<Array<Post>>(`${environment.wordpressApiUrl}/wp/v2/posts`);
  }
}
