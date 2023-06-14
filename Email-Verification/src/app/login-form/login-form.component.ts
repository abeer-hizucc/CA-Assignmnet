
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
login :FormGroup|any;
  constructor(private loginService:SignupService) { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }
  onSubmit(){
    if(this.login.valid){
     this.loginService.logindata(this.login);
    }
  }

}
