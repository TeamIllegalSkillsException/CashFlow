import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(private authService: AuthService) { }
  
  get isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {

  }
}
