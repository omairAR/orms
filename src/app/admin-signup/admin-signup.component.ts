import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../Services/authentication/auth.service'
@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {

  public rno =0;

  public SignupForm = this.fb.group({
    username: [''],
    password: ['']
  })

  constructor(private router: Router, private fb: FormBuilder, private auth: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  signup(): void {  
    console.log(this.SignupForm.value);
    this.auth.register(this.SignupForm.value).
    subscribe(
      res =>{ 
        console.log(res)
        localStorage.setItem('token',res.token);
        this.router.navigate(['/adminHome/adminoverview']);
      },
      err => console.log(err)
    )
  }
}
