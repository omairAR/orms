import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import {EventService} from '../Services/authentication/event.service'
import { HttpErrorResponse } from '@angular/common/http';

import {AuthService} from '../Services/authentication/auth.service';

import {slider} from '../route-animations'

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css'],
  animations: [ // <-- add your animations here
    // fader,
    slider
    // transformer,
    //stepper
  ]
})
export class AdminHomeComponent implements OnInit {
  public opened = false;
  constructor(private router: Router, private route: ActivatedRoute, private eventService: EventService, private auth: AuthService) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  
  public name;

  ngOnInit(): void {
    this.eventService.getSpecialEvents().
    subscribe(
      res=> {
        this.name=res;
        console.log(res);
      },
      err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status ===401 ){
            this.router.navigate(['/adminLogin'])
          }
        }
        console.log(err)
      }
    )
    
    
    

  }

  dashboard(){
    this.router.navigate(['admindashboard'],{relativeTo: this.route})
  }

  logoutt(){
    this.auth.logOut();
  }

  dispAddRslt(){
    this.router.navigate(['addresults'], {relativeTo: this.route})
  }

  dispAdminOvrView(){
    this.router.navigate(['adminoverview'], {relativeTo: this.route})
  }

}
