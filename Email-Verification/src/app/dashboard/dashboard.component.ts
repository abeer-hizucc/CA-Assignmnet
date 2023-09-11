import { Component} from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  {
  logoutToken!:Subscription; 
  constructor(private apiService:ApiService){}
  ngOnInit() {
    this.apiService.fetchData();
  }
}
