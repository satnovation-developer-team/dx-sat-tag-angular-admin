import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../shared/services/data.service';
import { CommonUrlsService } from '../../shared/services/common-urls.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit, OnDestroy {

  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  invalidError = false;

  loginSubmitted = false;
  forgotPasswordSubmitted = false;

  loginFormControl: any;
  forgotPasswordFormControl: any;

  loginFormValidations = {
    'email_id': [
      { type: 'required', message: 'Email is required' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' }
    ],
  };

  forgotPasswordFormValidations = {
    'email_id': [
      { type: 'required', message: 'Email is required' }
    ],
  }

  subscriptions = {
    login: null,
  };

  constructor(private router: Router, public dataService: DataService, public CUS: CommonUrlsService) { 
    this.InitializeLoginForm();
    this.InitializeForgotPasswordForm();
  }

  ngOnInit() {
    this.loginFormControl = this.loginForm.controls;
    this.forgotPasswordFormControl = this.forgotPasswordForm.controls;
  }

  // initialize login Form
  InitializeLoginForm() {
    this.loginForm = new FormGroup({
      email_id: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  InitializeForgotPasswordForm(){
    this.forgotPasswordForm = new FormGroup({
      email_id: new FormControl('', [Validators.required]),
    });
  }

  Login() {
    console.log('true', this.loginForm.value);
    this.loginSubmitted = true;
    if (this.loginForm.valid) {
      this.subscriptions.login = this.dataService.login('users', this.loginForm.value).subscribe((res) => {
        if (res.auth == true) {
        //   this.loginSubmitted = false;
          this.dataService.saveUserInfo(res.token);
          this.router.navigate([this.CUS._URL.DASHBOARD]);
        //   this.toastrService.typeSuccess('Login!', 'Login Successfully.');
        }
        else {
        //   // this.error = res.message;
        //   this.toastrService.typeError(this.error, 'Login Failed.');
          this.router.navigate([this.CUS._URL.LOGIN]);
        }
      }),
        (error) => {
        }
    }
    else{
      this.loginForm.invalid;
    }
  }

  forgot_password()
  {
    this.forgotPasswordSubmitted = true;
    if (this.forgotPasswordForm.valid) {}
    else { this.forgotPasswordForm.invalid;}
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      for (let sub in this.subscriptions) {
        if (this.subscriptions[sub]) {
          this.subscriptions[sub].unsubscribe();
        }
      }
    }
  }

}
