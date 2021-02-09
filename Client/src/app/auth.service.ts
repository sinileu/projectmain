import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginUser(user){
    return this.http.post<any>("http://localhost:5000/login",user)
  }

  constructor(private http:HttpClient) { }
  loggedIn(){
    return !!localStorage.getItem("token")
  }
  getToken(){
   return localStorage.getItem("token")
  }
  uloggedIn(){
    return !!localStorage.getItem("username")
  }
  erroronloggedIn(){
    return !!localStorage.getItem("error")
  }

}
