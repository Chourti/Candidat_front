import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: true,
  imports: [FormsModule, NgIf],
})
export class SignupComponent {
  firstname = '' ;
  lastname = '';
  username = '';
  email = '';
  phone = '+212';
  password = '';
  confirmPassword = '';
  submitted: boolean = false;
  emailValid: boolean = true;
  phoneValid : boolean = true;

  private apiurl = 'http://localhost:3306/api/signup';
 
  

  constructor(private router: Router) {}

  validateEmail() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    this.emailValid = re.test(String(this.email).toLowerCase());
  }

  validatePhone() {
    const re = /^\+212\d{9}$/;
    this.phoneValid = re.test(this.phone);
  }

  enforcephoneFormat() {
    if (!this.phone.startsWith('+212')) {
      this.phone = '+212' + this.phone.replace(/[^0-9]/g, '');
    } else {
      this.phone = '+212' + this.phone.slice(4).replace(/[^0-9]/g, '').substring(0, 9);
    }
  }

  onSubmit() {
    this.submitted = true;
    this.validateEmail();
    this.validatePhone();

    if (!this.username || !this.email || !this.phone || !this.password || !this.confirmPassword || !this.emailValid || this.password !== this.confirmPassword) {
      alert('Veuillez remplir tous les champs obligatoires et vérifier que les mots de passe correspondent.');
      return;
    }

    console.log('Prénom:', this.firstname);
    console.log('Nom:', this.lastname);
    console.log('Username:', this.username);
    console.log('Email:', this.email);
    console.log('Phone:', this.phone);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);

  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
