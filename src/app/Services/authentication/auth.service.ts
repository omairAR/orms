import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private route:Router) { }
  uri = 'https://orms-backend.herokuapp.com/';
  private registerUrl = this.uri+"admin/register/";
  private loginUrl =this.uri+"admin/login/";
  

  register(user){
    return this.http.post<any>(this.registerUrl, user);
  }

  login(user){
    return this.http.post<any>(this.loginUrl,user);
  }

  loggedIn(){
   
    return !!localStorage.getItem('token')
  }

  getToken(){
    
    return localStorage.getItem('token')
  }

  logOut(){
    localStorage.removeItem('token');
    this.route.navigate(['/adminLogin']);
  }


}
