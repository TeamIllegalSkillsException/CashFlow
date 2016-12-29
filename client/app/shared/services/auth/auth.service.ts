import { Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpRequester } from '../../../services/http-requester.service';
import { HttpRequesterOptionsFactoryService } from '../../../services/http-requester-options-factory.service';

@Injectable()
export class AuthService {
  private authenticationApiUrl: string = '/api/authenticate';

  constructor(private httpRequesterService: HttpRequester,
              private httpRequesterOptionsFactory: HttpRequesterOptionsFactoryService) {
  }

  public isLoggedIn(): Observable<boolean> | boolean {
    let userDataString: string = localStorage.getItem('user');

    if (!userDataString) {
      return false;
    }

    let token: string = JSON.parse(userDataString).auth_token;
    let contentTypeHeaderObject = {
      'Content-Type': 'application/json',
      'AuthToken': token
    };
    const httpRequestOptions = this.httpRequesterOptionsFactory
      .createHttpRequesterOptions(this.authenticationApiUrl, {}, contentTypeHeaderObject);

    return this.httpRequesterService
      .post(httpRequestOptions)
      .map((response: Response) => {
        let result = JSON.parse(response.text());
        if (result.success) {
          return true;
        }

        return false;
      });
  }

  public logoutUser(): void {
    localStorage.clear();
  }
}
