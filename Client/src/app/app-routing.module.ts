import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MyComplaintComponent } from './mycomplaint/mycomplaint.component';
import { EditcomplaintComponent } from './editcomplaint/editcomplaint.component';
import { AuthGuard } from "./auth.guard";


const routes: Routes = [
  {path:"header",component:HeaderComponent},
  {path:"complaint",canActivate:[AuthGuard],component:ComplaintComponent},
  {path:"mycomplaint",component:MyComplaintComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"",component:HomeComponent},
  {path:"editcomplaint",component:EditcomplaintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
