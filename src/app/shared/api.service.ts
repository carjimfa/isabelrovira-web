import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private readonly httpClient: HttpClient) {}

  get<TEntity>(endpoint: string, id: string): Observable<TEntity> {
    return this.httpClient.get<TEntity>(`${endpoint}/${id}`);
  }

  getList<TEntity, TParams>(endpoint: string, params?: TParams): Observable<Array<TEntity>> {
    const httpParams = new HttpParams(params ?? {});
    return this.httpClient.get<Array<TEntity>>(`${endpoint}`, {params: httpParams});
  }
}
