import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  {redirectTo:'',path:'login',pathMatch:'full'},
  {path:'login', component:LoginFormComponent},
  {path:'signup', component:RegistrationFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
