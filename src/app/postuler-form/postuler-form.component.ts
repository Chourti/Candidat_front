import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-postuler-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    NavbarComponent
],
  templateUrl: './postuler-form.component.html',
  styleUrls: ['./postuler-form.component.css']
})
export class PostulerFormComponent {
  postulerForm: FormGroup;
  selectedFiles: { [key: string]: File } = {};

  constructor(private fb: FormBuilder) {
    this.postulerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onFileSelected(event: any, field: string) {
    this.selectedFiles[field] = event.target.files[0];
  }

  onSubmit() {
    if (this.postulerForm.valid) {
      const formData = new FormData();
      formData.append('nom', this.postulerForm.get('nom')?.value);
      formData.append('prenom', this.postulerForm.get('prenom')?.value);
      formData.append('email', this.postulerForm.get('email')?.value);
      formData.append('cv', this.selectedFiles['cv']);
      formData.append('cin', this.selectedFiles['cin']);
      formData.append('diplome', this.selectedFiles['diplome']);

      // Handle form submission logic here
      console.log('Form submitted', formData);
    }
  }
}
