
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { SignupService } from '../services/signup.service';
import { SigninValidators } from '../Custom-Validators/signin-validators';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
signup:FormGroup|any;
signUser :any;
signProcess:any;
constructor(private form:FormBuilder,private signupService:SignupService, private googleLogin:GoogleApiService) { }
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'email':new FormControl(null, [Validators.required,Validators.email]),
      'pNumber':new FormControl(null,[Validators.required, Validators.pattern(/^01\d{9}$/)]),
      'password':new FormControl(null, [Validators.required,Validators.minLength(8)]),
      'confirmpassword':new FormControl(null, [Validators.required],[SigninValidators.asyncCheckConfirmPassword]),


    })
  }
 onSubmit(){
if(this.signup.valid){
  this.signupService.signUpData(this.signup);
}
}
googleSignin() {
  this.googleLogin.login()
    .then((res: any) => {
      console.log('Logged in with Google:', res);
    })
    .catch((err: any) => {
      console.log('Google login error:', err);
    });
}
}

