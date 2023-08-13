import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { Router } from '@angular/router';
import { SharedButtonService } from '../services/registerDisable.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})
export class HeaderComponent {
  constructor(private googleLogOut: GoogleApiService,private router:Router, private buttonService:SharedButtonService ) { }
 register(){
    this.router.navigate(['eKYCRegister']);
 }
 isButtonDisabled(): boolean {
  return this.buttonService.getButtonDisabled();
}
}
