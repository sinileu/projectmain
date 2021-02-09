import { Component, OnInit } from '@angular/core';
import { HomeService } from "../home.service";
import { UserModel } from "./user.model";
import { Router } from '@angular/router';   //Added for accessing Router class

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private homeService: HomeService, private router: Router) { }
  title:String = "Sign Up";    //Page Title
  userItem= new UserModel(null,null,null,null,null,null);

  ngOnInit(): void {
  }

  addUser(){
    this.homeService.newUser(this.userItem);
    console.log("called");
    alert("You Have Successfully Signed Up. Now Please Log In.");
    this.router.navigate(["/signin"]);
  }

}
