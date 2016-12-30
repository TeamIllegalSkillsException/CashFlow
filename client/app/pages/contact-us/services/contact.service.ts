import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { Observable } from 'rxjs/Observable';
import { Response, Http, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class ContactService {

    constructor(private http: Http) { }

    private contactUrl: string = 'http://localhost:3003/api/contact-us';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });


    send(contact: Contact): Observable<Contact[]> {
        let c = JSON.stringify(contact);
        return this.http.post(this.contactUrl, c, this.options)
          .map((res: Response) => {                          
              res.json();                            
          })
          .catch((error: any) => Observable.throw(error.json().error));        
    }
};
