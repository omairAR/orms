import { Component, OnInit } from '@angular/core';
import {DashboardService} from './../Services/dashboard.service'

export interface ResultCnt{
  _id: string;
  count: number;
}
export interface PassedCnt{
  _id: string;
  count: number;
}
export interface FailedCnt{
  _id: string;
  count: number;
}

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  
  resultCount : ResultCnt[];
  passedCount : PassedCnt[];
  failedCount : FailedCnt[];

  constructor(private dashboard: DashboardService) { }
  

  public displayRslt;
  public displayPass;
  public displayFail;

  ngOnInit(): void {
    this.resultcountfn();
    this.passedcountfn();
    this.failedcountfn();
  }

  resultcountfn(){
    this.dashboard.getresultCount().
    subscribe((data: ResultCnt[])=>{
      this.resultCount = data;
      this.displayRslt=data[0].count;
      console.log(' data requested ..');
      console.log(this.resultCount);
      
    })
    
  }

  passedcountfn(){
    this.dashboard.getpassedCount().
    subscribe((data: PassedCnt[])=>{
      this.passedCount = data;
      this.displayPass=data[0].count;
      console.log(' data requested ..');
      console.log(this.passedCount);
      
    })
    
  }

  failedcountfn(){
    this.dashboard.getfailedCount().
    subscribe((data: FailedCnt[])=>{
      this.failedCount = data;
      this.displayFail=data[0].count
      console.log(' data requested ..');
      console.log(this.failedCount);

    })
    
  }

}
