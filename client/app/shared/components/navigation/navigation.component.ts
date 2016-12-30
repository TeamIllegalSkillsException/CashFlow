import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth';
import {Observable} from "rxjs/Rx";

@Component({
  selector: 'app-navigation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isLogged: Observable<boolean> | boolean;

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn();
  }

  ngDoCheck() {
    this.isLogged = this.authService.isLoggedIn();
  }
}
