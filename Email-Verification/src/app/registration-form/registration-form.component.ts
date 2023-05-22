import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
  signup:FormGroup|any;
constructor() { }
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname':new FormControl(),
      'email':new FormControl(),
      'pNumber':new FormControl(),
      'password':new FormControl(),
      'confirm-password':new FormControl()


    })
  }
  signUpData(signup:FormGroup){
    console.log(this.signup.value);
  }
}

