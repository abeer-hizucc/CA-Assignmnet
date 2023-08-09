import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ResponseService } from '../services/ocrresponse.service';

@Component({
  selector: 'app-e-kyc-form',
  templateUrl: './e-kyc-form.component.html',
  styleUrls: ['./e-kyc-form.component.css']
})

export class EKYCFormComponent implements OnInit {
  eKYCForm:FormGroup|any;
  responseService:ResponseService|any;
  
  
  constructor(private form:FormBuilder,responseService:ResponseService) { 
    this.responseService = responseService;
  }
   
  ngOnInit(): void {
    const responseData = this.responseService?.getResponseData();
    this.eKYCForm = this.form.group({
      'name': new FormControl(responseData?.name),
      'dob': new FormControl(responseData?.dob),
      'idNo': new FormControl(responseData?.idNo),
      'address': new FormControl(null),
      'fatherName': new FormControl(null,[Validators.required,Validators.minLength(5)]),
      'motherName': new FormControl(null,[Validators.required,Validators.minLength(5)]),
  })
}


}