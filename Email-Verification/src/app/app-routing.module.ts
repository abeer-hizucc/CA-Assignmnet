import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GetimageComponent } from './getimage/getimage.component';
import{EKYCFormComponent} from './e-kyc-form/e-kyc-form.component';
const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {redirectTo:'',path:'login',pathMatch:'full',component:LoginFormComponent},
  {path:'login', component:LoginFormComponent},
  {path:'signup', component:RegistrationFormComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'eKYCRegister',component:GetimageComponent},
  {path:'eKYCForm',component:EKYCFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
