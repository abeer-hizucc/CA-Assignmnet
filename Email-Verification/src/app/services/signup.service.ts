import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Injectable({
    providedIn:'root'
})
export class SignupService{
constructor(private http:HttpClient, private toast:ToastrService,private router:Router){}
signUpData(signup:FormGroup){
    console.log(signup);
    this.http.post<any>('http://localhost:3000/signup',signup.value).subscribe((res)=>{
     
    this.toast.success(signup.value.fname,'Registration Successful');
      signup.reset();
      this.router.navigate(["dashboard"]);

    },err=>{
      this.toast.error('Error',"Registration Failed");
        signup.reset();
    }
    )
  }
  logindata(login:FormGroup){
    console.log(login.value);
    this.http.get<any>('http://localhost:3000/signup').subscribe((res)=>{
      const user = res.find((a:any)=>a.email === login.value.email && a.password === login.value.password);
      if(user){
        
        this.toast.success(login.value.fname,'Login Successful');
        login.reset();
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
      login.reset();
    }
    );
    
  }
}