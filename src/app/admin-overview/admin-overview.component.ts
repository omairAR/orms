import { Component, OnInit } from '@angular/core';
import { EventService } from '../Services/authentication/event.service'
import { Router, ActivatedRoute } from '@angular/router';
import { DashboardService } from '../Services/dashboard.service';
export interface Cnt{
  _id: string;
  count: number;
}


export interface Admin{
  _id: string;
  username: string;
  password: string;
}

@Component({
  selector: 'app-admin-overview',
  templateUrl: './admin-overview.component.html',
  styleUrls: ['./admin-overview.component.css']
})
export class AdminOverviewComponent implements OnInit {

  public displayRsltID;
  public displayPassID;
  public displayFailID;
  
  admins: Admin[];

  constructor(private eventService: EventService, private router: Router, private route: ActivatedRoute, private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.fetchSamples();
  }

  fetchSamples(){
    this.eventService.
    getAdmins()
    .subscribe((data: Admin[])=>{
      this.admins = data;
      console.log(' data requested ..');
      console.log(this.admins);

    })

    this.resultcountfn();
    this.passedcountfn();
    this.failedcountfn();
  }

  delAdmin(id){
    this.eventService.deleteAdmin(id).subscribe(()=>{
      this.fetchSamples();
    })
  }

  createAdmin(){
    this.router.navigate(['adminSignup'], {relativeTo: this.route});
  }

  resultcountfn(){
    this.dashboard.getresultCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayRsltID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  passedcountfn(){
    this.dashboard.getpassedCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayPassID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  failedcountfn(){
    this.dashboard.getfailedCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayFailID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  resetresults(){
    this.dashboard.resultCreset(this.displayRsltID).subscribe(()=>{});
    this.dashboard.passedCreset(this.displayPassID).subscribe(()=>{});
    this.dashboard.failedCreset(this.displayFailID).subscribe(()=>{});
  }
}
