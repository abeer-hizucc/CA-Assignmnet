import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { provideAnimations } from '@angular/platform-browser/animations';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from '@abacritt/angularx-social-login';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationFormComponent,
    LoginFormComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(
      {
        timeOut:3000,
        positionClass:'toast-top-left',
        preventDuplicates:true,
        enableHtml:true,
        progressBar:true,
        progressAnimation:'increasing'

      }
    )

  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('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'),
          },
        ],
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
