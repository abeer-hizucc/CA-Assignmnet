import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  email!: string;
  name!: string;
  phoneNumber!: string;
  password!: string;
  confirmPassword!: string;

  onSubmit() {
    // Perform email verification using a service or API
    // If the password is valid, register the user
    if (this.password === 'valid-password'&& this.password === this.confirmPassword) {
      console.log('Registration successful!');
    } else if (this.password !== this.confirmPassword) {
      console.log('Password Does not match');}
      else{
        console.log('Registration failed!');
      }
    }
  }

