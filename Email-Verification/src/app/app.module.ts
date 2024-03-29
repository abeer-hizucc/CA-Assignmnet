import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OAuthModule } from 'angular-oauth2-oidc';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GetimageComponent } from './getimage/getimage.component';
import { EKYCFormComponent } from './e-kyc-form/e-kyc-form.component';
import { EKYC2ndFormComponent } from './e-kyc2nd-form/e-kyc2nd-form.component';
import { WebcamModule } from 'ngx-webcam';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    GetimageComponent,
    EKYCFormComponent,
    EKYC2ndFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OAuthModule.forRoot(),
    BrowserAnimationsModule,
    WebcamModule,
    ToastrModule.forRoot(
      {
        timeOut:3000,
        positionClass:'toast-top-left',
        preventDuplicates:true,
        enableHtml:true,
        progressBar:true,
        progressAnimation:'increasing'

      }
    ),
   

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
