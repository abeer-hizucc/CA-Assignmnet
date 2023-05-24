import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
login :FormGroup|any;
  constructor(private router:Router, private http:HttpClient, private toast:ToastrService) { }
  ngOnInit(): void {
    this.login = new FormGroup({
      'email':new FormControl(),
      'password':new FormControl()
    })
  }
  logindata(login:FormGroup){
    console.log(this.login.value);
    this.http.get<any>('http://localhost:3000/signup').subscribe((res)=>{
      const user = res.find((a:any)=>a.email === this.login.value.email && a.password === this.login.value.password);
      if(user){
        
        this.toast.success(this.login.value.fname,'Login Successful');
        this.login.reset();
        this.router.navigate(['dashboard']);
      }
      else{
        //alert("User Not Found");
        this.toast.error('Error',"User Not Found");
        this.router.navigate(['login']);
      }
    },err=>{
     // alert("Something went wrong");
      this.toast.error('Error',"Something went wrong");
      this.login.reset();
    }
    );
    
  }
}
