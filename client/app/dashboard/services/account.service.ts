/* Common */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';

/* Services */
import { UserService } from '../../users/services/user.service';
import { HttpRequester, HttpRequesterOptionsFactoryService } from '../../shared/services/http/index';
import {Account} from "../account/account.model";

@Injectable()
export class AccountService {
  private userAccountApiUrl: string = '/api/user-accounts';

  constructor(private userService: UserService,
              private httpRequesterService: HttpRequester,
              private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) {
  }

  getUserAccountDataById(accountId:string): Observable<Response> {
    const getUserAccUrl = this.userAccountApiUrl + '/' + accountId,
      authHeaderObject = this.userService.getAuthHeaderObject(),
      userId = this.userService.getLoggedUser()._id;

    let httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(getUserAccUrl, {accId: accountId, userId: userId}, authHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }

  getUserAccounts(): Observable<Response> {
    let authHeaderObject = this.userService.getAuthHeaderObject();

    let httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userAccountApiUrl, {}, authHeaderObject);

    return this.httpRequesterService.get(httpRequestOptions);
  }

  addAccountToCurrentUser(account: Account): Observable<Response> {
    let authHeaderObject = this.userService.getAuthHeaderObject();
    console.log(authHeaderObject);

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userAccountApiUrl, account, authHeaderObject);

    return this.httpRequesterService.post(httpRequestOptions);
  }
  
  updateUserAccountData(account: Account): Observable<Response> {
    const authHeaderObject = this.userService.getAuthHeaderObject();

    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.userAccountApiUrl, account , authHeaderObject);

    return this.httpRequesterService.put(httpRequestOptions);
  }
};
