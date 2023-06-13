import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  
signup:FormGroup|any;
signUser :any;
constructor(private http:HttpClient, private toast:ToastrService,private router:Router,private form:FormBuilder) { }
  ngOnInit(): void {
    this.signup = new FormGroup({
      'fname':new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'email':new FormControl(null, [Validators.required,Validators.email]),
      'pNumber':new FormControl(null,[Validators.required, Validators.pattern(/^01\d{9}$/)]),
      'password':new FormControl(null, [Validators.required,Validators.minLength(8)]),
      'confirm-password':new FormControl()


    })
  }
  
  signUpData(signup:FormGroup){
    console.log(this.signup);
    this.signUser = this.signup.value.fname;
    this.http.post<any>('http://localhost:3000/signup',this.signup.value).subscribe((res)=>{
     
    this.toast.success(this.signUser,'Registration Successful');
      this.signup.reset();
      this.router.navigate(["dashboard"]);

    },err=>{
      this.toast.error('Error',"Registration Failed");
      this.signup.reset();
    }
    )
  }
}

