import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpRequester } from '../../../shared/services/http/http-requester.service';
import { HttpRequesterOptionsFactoryService } from '../../../shared/services/http/http-requester-options-factory.service';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OurServicesService{
    
    constructor(private requesterService: HttpRequester, 
                private httpRequesterOptionsFactoryService: HttpRequesterOptionsFactoryService) { }

    getOurServicesDetails(): Observable<Response> {
        const httpRequestOptions = this.httpRequesterOptionsFactoryService
            .createHttpRequesterOptions('/api/services');

        return this.requesterService.get(httpRequestOptions);
    }
}
