import { Injectable } from '@angular/core';
import { User } from './../models/user.model';

@Injectable()
export class UserFactoryService {

  constructor() { }

  createUser(username = '', password = '', email = '', firstName = '', lastName = '', age = 0, avatarUrl = ''): User {
    const newUser = new User();
    newUser.username = username;
    newUser.password = password;
    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.age = age;
    newUser.avatarUrl = avatarUrl;
    newUser.dateCreated = new Date();

    return newUser;
  }
}
