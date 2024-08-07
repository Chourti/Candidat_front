import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router'; // Import Router
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';
import { FooterComponent } from '../footer/footer.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, public dialog: MatDialog) {} // Initialize Router in constructor

  navigateTo(page: string) {
    this.router.navigate([page]);
  }

  logout() {
    // Implement logout logic here
    console.log('User logged out');
  }

  openDescription(description: string) {
    this.dialog.open(DescriptionDialogComponent, {
      data: { description }
    });
  }

  downloadPDF() {
    fetch('/assets/guide.pdf') // Adjust the path to your PDF file
      .then(response => response.blob())
      .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Guide_Candidature.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch(err => console.error('Error downloading the PDF:', err));
  }
}
