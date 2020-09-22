import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import {AuthService} from '../Services/authentication/auth.service'


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  public rno =0;

  public loginForm = this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {  
      
    console.log(this.loginForm.value)
    this.auth.login(this.loginForm.value).
    subscribe(
      res =>{ 
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/adminHome/admindashboard'])
      },
      err => console.log(err)
    )
  }

}
