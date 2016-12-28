import { Headers, Http, Response, } from '@angular/http';
import { HttpRequest } from '../shared/models/http-requester.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpRequester {

  constructor(private httpService: Http) { }

  get(options: HttpRequest): Observable<Response> {
    const headers = new Headers(options.headers);
    return this.httpService.get(options.url, { headers });
  }

  post(options: HttpRequest): Observable<Response> {
    const content = JSON.stringify(options.content);
    const headers = new Headers(options.headers);
    return this.httpService.post(options.url, content, { headers });
  }

  put(options: HttpRequest): Observable<Response> {
    const content = JSON.stringify(options.content);
    const headers = new Headers(options.headers);
    return this.httpService.put(options.url, content, { headers });
  }
}