import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { SiteSettings } from '../models/siteSettings'

@Injectable()
export class SiteSettingsService {

    constructor(private http: Http) { }

    private settingsUrl: string = 'http://localhost:3003/api/siteSettings';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });


    getSettings(): Observable<Response> {         
        return this.http.get(this.settingsUrl, this.options)
                        .catch((error: any) => Observable.throw(error.json().error));        
    }
};