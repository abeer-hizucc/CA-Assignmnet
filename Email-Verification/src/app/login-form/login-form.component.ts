import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
login :FormGroup|any;
  constructor() { }
  ngOnInit(): void {
  }
  logindata(login:FormGroup){
    console.log(login.value)
  }
}
