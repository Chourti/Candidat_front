import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
navigateTo(route: string) {
this.router.navigate([`${route}`]);
}

constructor(private router: Router) { }


logout() {
  console.log('User logged out');
  this.router.navigate(['/login']);
}
}
