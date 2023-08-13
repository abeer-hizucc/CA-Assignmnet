import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";
import { BackendResponse } from "../models/FormBackendResponse.model";
@Injectable({
    providedIn: 'root'
  })
  export class FormService {
    isSubmitting!: boolean;
  
    constructor(private http: HttpClient, private router: Router) { }
  
    submitForm(formData: any): void {
      this.http.post<BackendResponse>('http://localhost:9090/form-fillup', formData)
        .pipe(
          catchError(error => {
            console.error('Error submitting form:', error);
            return throwError(error);
          })
        )
        .subscribe(response => {
          console.log('Form submitted successfully:', response);
  
          if (response.success) {
            console.log('Success message:', response.message);
            this.router.navigate(['/2ndeKYCForm']);
          }
        }, error => {
          // Handle error if needed
        })
        .add(() => {
          this.isSubmitting = false; // Set isSubmitting to false after the submission process
        });
    }
  }

