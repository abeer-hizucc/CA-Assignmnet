import { Component } from '@angular/core';
import { GoogleApiService } from '../services/google-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private googleLogOut: GoogleApiService) { }
  logout() {
    this.googleLogOut.logout();
    console.log('Logged out from Google');
  }
}
