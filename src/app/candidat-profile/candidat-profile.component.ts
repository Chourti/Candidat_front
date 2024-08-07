import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-candidat-profile',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule, HttpClientModule, NavbarComponent, FooterComponent],
  templateUrl: './candidat-profile.component.html',
  styleUrl: './candidat-profile.component.css'
})


export class CandidatProfileComponent {
  profileForm: FormGroup;
  selectedFile : {[key:string]:File} = {};

  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      cin: ['', Validators.required],
      diplome: ['', Validators.required],
  });
}
  
onFileSelected(event:Event, fileType:string):void{
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length){
    this.selectedFile[fileType] = input.files[0]; 
  }
}

onSubmit():void{
  if (this.profileForm.valid){
    const formData = new FormData();
    formData.append('firstname', this.profileForm.get('firstname')?.value);
    formData.append('lastname', this.profileForm.get('lastname')?.value);
    formData.append('email', this.profileForm.get('email')?.value);
    formData.append('phone', this.profileForm.get('phone')?.value);
    formData.append('password', this.profileForm.get('password')?.value);

    
    if (this.selectedFile["cin"]){
      formData.append('cin', this.selectedFile["cin"]);
  }
  if (this.selectedFile['diplome']){  
    formData.append('diplome', this.selectedFile['diplome']);
}

if (this.selectedFile['other']){
  formData.append('other', this.selectedFile['other']);
}

}
}
}
