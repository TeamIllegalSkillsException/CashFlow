import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { UserService } from '../../users/services/user.service';
import { HttpRequester, HttpRequesterOptionsFactoryService } from '../../shared/services/http/index'; 
//import { Bill } from '../bills/bill.model'; can be skipped

@Injectable()
export class BillsService {
    private userBillsUrl: string = '/api/user-bills';
    private billCategoriesUrl: string = '/api/bill-categories';
    private billRecurrencesUrl: string = '/api/bill-recurrences';
    private updateBillUrl: string = '/api/update-bill';
    
    

    constructor(private http: Http, private userService: UserService,
        private httpRequesterService: HttpRequester, private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) { }

    
    getUserBills(): Observable<Response> {         
       let authHeaderObject = this.userService.getAuthHeaderObject();
       let httpRequestOptions = this.httpRequesterOptionsFactory
                                        .createHttpRequesterOptions(this.userBillsUrl, {}, authHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    addBillToCurrentUser(bill: Object): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();
        console.log(authHeaderObject);

        const httpRequestOptions = this.httpRequesterOptionsFactory
                .createHttpRequesterOptions(this.userBillsUrl, bill, authHeaderObject);

        return this.httpRequesterService.post(httpRequestOptions);
    }

    getBillsCategories(): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();
        let httpRequestOptions = this.httpRequesterOptionsFactory
                                            .createHttpRequesterOptions(this.billCategoriesUrl, {}, authHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    getBillsRecurrences(): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();
        let httpRequestOptions = this.httpRequesterOptionsFactory
                                            .createHttpRequesterOptions(this.billRecurrencesUrl, {}, authHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    updateBill(bill): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();

        const httpRequestOptions = this.httpRequesterOptionsFactory
                .createHttpRequesterOptions(this.userBillsUrl, bill, authHeaderObject);

        return this.httpRequesterService.post(httpRequestOptions);
    }
};
