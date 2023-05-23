import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
constructor(private http:HttpClient, private toast:ToastrService,private router:Router) { }
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
    this.signUser = this.signup.value.fname;
    this.http.post<any>('http://localhost:3000/signup',this.signup.value).subscribe((res)=>{
    alert("Registration Successful");  
    this.toast.success(this.signUser,'Registration Successful');
      this.signup.reset();
      this.router.navigate(['/dashboard']);

    },err=>{
      alert('Something went wrong');
      this.signup.reset();
    }
    )
  }
}

