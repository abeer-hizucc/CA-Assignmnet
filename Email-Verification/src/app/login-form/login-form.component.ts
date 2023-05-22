import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
login :FormGroup|any;
  constructor() { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'fname':new FormControl(),
      'password':new FormControl()
    })
  }
  logindata(login:FormGroup){
    console.log(this.login.value)
  }
}
