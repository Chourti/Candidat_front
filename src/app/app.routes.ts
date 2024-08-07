import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { ContactComponent } from './contact/contact.component';
import { CandidatProfileComponent } from './candidat-profile/candidat-profile.component';
import { EmploiComponent } from './emploi/emploi.component';
import { PostulerFormComponent } from './postuler-form/postuler-form.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent },
  {path : 'contact', component : ContactComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'profile', component: CandidatProfileComponent },
  
  { path: 'emploi', component: EmploiComponent },
  { path: 'postuler', component: PostulerFormComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
