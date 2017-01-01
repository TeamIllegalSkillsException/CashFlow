/* Common */
import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";

/* Services */
import { User } from '../models/user.model';
import { UserFactoryService } from '../services/user.factory.service';
import { UserService } from '../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { SpinnerService } from "../../shared/services/spinner/spinner.service";

const MIN_FIELD_LENGTH = 3,
  MAX_FIELD_LENGTH = 20,
  LETTERS_PATTERN = '^[A-Za-zА-Яа-я]+$';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() user: User;

  public editUserForm: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public age: AbstractControl;
  // public avatarUrl: AbstractControl;
  public inEditMode:boolean = false;
  public submitted:boolean = false;

  constructor(private fb: FormBuilder,
              private userFactoryService: UserFactoryService,
              private userService: UserService,
              private spinnerService: SpinnerService,
              private notificationsService: NotificationsService) {
    this.user = this.userFactoryService.createUser();
    this.initEditUserFormValidation();
    this.initEditUserFormFields();
  }

  initEditUserFormValidation(): void {
    this.editUserForm = this.fb.group({
      'firstName': ['', Validators.compose([
        Validators.required, 
        Validators.minLength(MIN_FIELD_LENGTH), 
        Validators.maxLength(MAX_FIELD_LENGTH),
        Validators.pattern(LETTERS_PATTERN)
      ])],
      'lastName': ['', Validators.compose([
        Validators.required,
        Validators.minLength(MIN_FIELD_LENGTH),
        Validators.maxLength(MAX_FIELD_LENGTH),
        Validators.pattern(LETTERS_PATTERN)
      ])],
      'age': ['', Validators.compose([Validators.required])],
    });
  }

  initEditUserFormFields(): void {
    this.firstName = this.editUserForm.controls['firstName'];
    this.lastName = this.editUserForm.controls['lastName'];
    this.age = this.editUserForm.controls['age'];
    // this.avatarUrl = this.editUserForm.controls['avatarUrl'];
  }

  toggleEditMode(value:boolean): void {
    this.inEditMode = value;
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

  ngDoCheck() {

  }



  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.editUserForm.valid) {
      this.spinnerService.show();

      this.userService.updateUserProfile(this.user)
        .subscribe(response => {
          this.spinnerService.hide(500);

          console.log(response);
          this.toggleEditMode(false);

          const successTitle = "Success!";
          const successMessage = "You have updated your profile!";
          this.notificationsService.success(successTitle, successMessage);
        }, err => {
          this.spinnerService.hide();

          const errorTitle = "Oops! Something went wrong..";
          const errorMessage = err.json().message;
          this.notificationsService.error(errorTitle, errorMessage)
        }, () => {
          // setTimeout(() => this.appRouter.navigateByUrl('/login'), 500);
        });
    }
  }
}
