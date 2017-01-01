import {Component, ViewEncapsulation, Input} from '@angular/core';
import {Observable} from "rxjs/Rx";
import {AuthService} from "../../shared/services/auth/auth.service";

@Component({
  selector: 'dashboard-sidebar',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./dashboard-sidebar.component.scss')],
  template: require('./dashboard-sidebar.component.html')
})
export class DashboardSidebarComponent {
  isLogged: Observable<boolean> | boolean;
  
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.isLogged = this.authService.isLoggedIn();
  }

  ngDoCheck() {
    this.isLogged = this.authService.isLoggedIn();
  }
}
