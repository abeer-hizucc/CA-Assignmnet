import { Component } from '@angular/core';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[SignupService]
})
export class AppComponent {
  title = 'Dohatec-CA';
  constructor(private signup:SignupService){}
}
