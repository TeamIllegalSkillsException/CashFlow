import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth';
import { SpinnerService } from '../shared/services/spinner/spinner.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private authService: AuthService,
              private spinnerService: SpinnerService) { }

  get isUserLoggedIn() {
    return this.authService.isLoggedIn();
  }

  ngOnInit() {
    this.spinnerService.show();
  }

  public ngAfterViewInit(): void {
    this.spinnerService.hide(1000);
  } 
}
