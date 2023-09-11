import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Basic ' + btoa('username:password')
      }),
      withCredentials: true
    };

    this.http.get('http://localhost:9090', httpOptions).subscribe(data => {
      console.log(data);
    });
  }
}
