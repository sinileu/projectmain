
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomFieldvalidatorDirective } from './shared/custom-fieldvalidator.directive';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { MyComplaintComponent } from './mycomplaint/mycomplaint.component';
import { EditcomplaintComponent } from './editcomplaint/editcomplaint.component';
import { AuthService } from "./auth.service";    
import { TokenInterceptorService } from "./token-interceptor.service";
import { HomeService } from "./home.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SigninComponent,
    CustomFieldvalidatorDirective,
    SignupComponent,
    ComplaintComponent,
    MyComplaintComponent,
    EditcomplaintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, HomeService,   
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }