import { Component, OnInit } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  logoutToken!:Subscription;
  constructor(private googleLogOut: GoogleApiService) { }
  ngOnInit(): void {
    
  }
  logout() {
    this.googleLogOut.logout();
    console.log('Logged out from Google');
  }


}
