
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupService } from '../services/signup.service';
import { LoginValidators } from '../Custom-Validators/login-validators';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
login!:FormGroup;
  constructor(private loginService:SignupService, private googleLogin:GoogleApiService) { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'email':new FormControl(),
      'password':new FormControl(null,[LoginValidators.passwordLength]),
    })
  }
  onSubmit(){
    if(this.login.valid){
     this.loginService.logindata(this.login);
    }
  }
  Login() {
    this.googleLogin.login()
      .then((res: any) => {
        console.log('Logged in with Google:', res);
      })
      .catch((err: any) => {
        console.log('Google login error:', err);
      });
  }

}
