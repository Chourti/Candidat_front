import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl:   './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf ],
})
export class LoginComponent {
goToForgotPassword() {
throw new Error('Method not implemented.');
}
passwordFieldType: any;
  submitted: boolean= false;
// togglePasswordVisibility() {
//   this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
//   const passwordField = document.getElementById('password') as HTMLInputElement;
//   if (passwordField) {
//     passwordField.type = this.passwordFieldType;
//   }
// }
  matricule = '';
  password = '';
  

  constructor(private router: Router) {}

  onSubmit() {
    this.submitted = true;

    if (!this.matricule || !this.password) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    console.log('email:', this.matricule);
    console.log('Password:', this.password);
  }

  goToSignup() {
    this.router.navigate(['/signup']);
  }
  
}
