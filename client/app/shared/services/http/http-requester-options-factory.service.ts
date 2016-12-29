import { HttpRequest } from '../../models/http-requester.model';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpRequesterOptionsFactoryService {

  constructor() { }

  createHttpRequesterOptions(url: string, content = {}, headers = {}): HttpRequest {
    if (typeof content !== 'object') {
      content = { content };
    }

    return { url, content, headers };
  }
}