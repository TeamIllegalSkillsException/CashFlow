import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class UserFactoryService {

  constructor() { }

  createUser(username, password, email): User {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.email = email;
    newUser.dateCreated = new Date();

    return newUser;
  }
}
