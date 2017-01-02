import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { UserService } from '../../users/services/user.service';
import { HttpRequester, HttpRequesterOptionsFactoryService } from '../../shared/services/http/index';
import { Income } from '../incomes/models/income.model'; 

@Injectable()
export class IncomeService {
    private userIncomeUrl: string = '/api/user-income';
    private incomeRecurrencesUrl: string = '/api/income-recurrences';
    

    constructor(private http: Http, private userService: UserService,
        private httpRequesterService: HttpRequester, private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) { }

    
    getUserIncome(): Observable<Response> {         
       let authHeaderObject = this.userService.getAuthHeaderObject();
       let httpRequestOptions = this.httpRequesterOptionsFactory
                                        .createHttpRequesterOptions(this.userIncomeUrl, {}, authHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    addIncomeToCurrentUser(bill: Object): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();
        console.log(authHeaderObject);

        const httpRequestOptions = this.httpRequesterOptionsFactory
                .createHttpRequesterOptions(this.userIncomeUrl, bill, authHeaderObject);

        return this.httpRequesterService.post(httpRequestOptions);
    }

    getIncomeRecurrences(): Observable<Response> {
        let authHeaderObject = this.userService.getAuthHeaderObject();
        let httpRequestOptions = this.httpRequesterOptionsFactory
                                            .createHttpRequesterOptions(this.incomeRecurrencesUrl, {}, authHeaderObject);

        return this.httpRequesterService.get(httpRequestOptions);
    }

    updateUserIncome(userIncome: Income): Observable<Response> {
    const updateProfileUrl = this.userIncomeUrl + '/' + userIncome._id,
      authHeaderObject = this.getAuthHeaderObject();

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(updateProfileUrl, userIncome , authHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }
  
  getAuthHeaderObject() {
    let userDataString: string = localStorage.getItem('user');
    let token: string = JSON.parse(userDataString).auth_token;

    let authHeaderObject = {
      'Content-Type': 'application/json',
      'Authorization': token
    };

    return authHeaderObject;
  }
};
