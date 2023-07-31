import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private googleLogOut: GoogleApiService,private router:Router) { }
 register(){
    this.router.navigate(['eKYCRegister']);
 }
}
