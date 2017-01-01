import { Component, OnInit } from '@angular/core';

/* Services */
import { User } from '../models/user.model';
import { UserFactoryService } from '../services/user.factory.service';
import { UserService } from '../services/user.service';
import { SpinnerService } from "../../shared/services/spinner/spinner.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(private spinnerService: SpinnerService,
              private userFactoryService: UserFactoryService,
              private userService: UserService) {
    this.user = this.userFactoryService.createUser();
  }

  ngOnInit() {
    this.spinnerService.show();

    this.userService.getUserProfile()
      .map(res => res.json())
      .subscribe(response => {
        this.user = response;
        this.spinnerService.hide();
      });
  }

}
