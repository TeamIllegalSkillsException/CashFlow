/* Common */
import {Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { NgUploaderOptions } from 'ngx-uploader';

/* Services */
import { User } from '../models/user.model';
import { UserFactoryService } from '../services/user.factory.service';
import { UserService } from '../services/user.service';
import { NotificationsService } from 'angular2-notifications';
import { SpinnerService } from "../../shared/services/spinner/spinner.service";

const MIN_FIELD_LENGTH = 3,
  MAX_FIELD_LENGTH = 20,
  LETTERS_PATTERN = '^[A-Za-zА-Яа-я]+$',
  uploadUrl = '/api/users/upload';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user: User;
  public filesToUpload: File;
  public editUserForm: FormGroup;
  public firstName: AbstractControl;
  public lastName: AbstractControl;
  public age: AbstractControl;
  public avatarUrl: any;
  public inEditMode:boolean = false;
  public submitted:boolean = false;

  public sizeLimit = 2000000;
  public options: NgUploaderOptions = {
    url: '/api/upload',
    customHeaders: {},
    data:{}
  };

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
  }

  setFileUploaderHeaders() {
    let loggedUserId = JSON.parse(localStorage.getItem('user'))._id;
    this.options.customHeaders = this.userService.getAuthToken();
    this.options.data = {_id:loggedUserId};
  }

  toggleEditMode(value:boolean): void {
    this.inEditMode = value;
  }

  ngOnInit() {
    this.setFileUploaderHeaders();

    this.spinnerService.show();

    this.userService.getUserProfile()
      .map(res => res.json())
      .subscribe(response => {
        this.user = response;
        this.spinnerService.hide();
      });
  }

  handleUpload(data): void {
    if (data && data.response) {
      data = JSON.parse(data.response);
      this.user.avatarUrl = data.imageUrl;
      this.updateUserData();
    }
  }

  beforeUpload(uploadingFile): void {
    if (uploadingFile.size > this.sizeLimit) {
      uploadingFile.setAbort();
      alert('File is too large');
    }
  }

  uploadAvatar() {
    this.userService.updateUserProfileImage(this.user._id, this.filesToUpload)
      .subscribe(response => {
        console.log(response)
      })
  }

  updateUserData() {
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

  public onSubmit(values:Object):void {
    this.submitted = true;

    if (this.editUserForm.valid) {
      this.spinnerService.show();
      this.updateUserData();
    }
  }
}
