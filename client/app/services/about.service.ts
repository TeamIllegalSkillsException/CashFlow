import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpRequester } from '../services/http-requester.service';
import { Response, Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutUsService{
    //private headers = new Headers({ 'Content-Type': 'application/json', 'charset': 'UTF-8' });
    //private options = new RequestOptions({ headers: this.headers });

    constructor(private http: Http ) { }

    getAboutDetails(): Observable<any> {
        return this.http.get('/about').map(res => res.json());
    }
}