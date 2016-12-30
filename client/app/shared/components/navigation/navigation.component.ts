import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-navigation',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }
  
  ngOnInit() {
  }

}
