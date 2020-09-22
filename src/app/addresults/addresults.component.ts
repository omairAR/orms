import { Component, OnInit } from '@angular/core';
import { Papa } from 'ngx-papaparse';
import {ResultCrudService} from '../Services/result-crud.service'
import {DashboardService} from '../Services/dashboard.service'

export interface Cnt{
  _id: string;
  count: number;
}

@Component({
  selector: 'app-addresults',
  templateUrl: './addresults.component.html',
  styleUrls: ['./addresults.component.css']
})
export class AddresultsComponent implements OnInit {
  mca1="mcaI";
  mca2="mcaII";
  mca3="mcaIII";
  mca4="mcaIV";
  mca5="mcaV";
  mca6="mcaVI";
  constructor(private papa: Papa, private rescrud : ResultCrudService, private dashboard: DashboardService) { }


  public resultcount ;
  public passcount ;
  public failcount ;

  public displayRsltID;
  public displayPassID;
  public displayFailID;

  ngOnInit(): void {
    this.resultcountfn();
    this.passedcountfn();
    this.failedcountfn();
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
  }

  impmca1(evt){
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let studDetails = {
              rollno: results.data[i].rollno,
              name: results.data[i].name,
              e1: results.data[i].e1,
              e2: results.data[i].e2,
              e3: results.data[i].e3,
              e4: results.data[i].e4,
              e5: results.data[i].e5,
              e6: results.data[i].e6,
              e7: results.data[i].e7,
              s1: results.data[i].s1,
              s2: results.data[i].s2,
              s3: results.data[i].s3,
              s4: results.data[i].s4,
              s5: results.data[i].s5,
              s6: results.data[i].s6,
              s7: results.data[i].s7,

              g1: results.data[i].g1,
              g2: results.data[i].g2,
              g3: results.data[i].g3,
              g4: results.data[i].g4,
              g5: results.data[i].g5,
              g6: results.data[i].g6,
              g7: results.data[i].g7,
              gp1: results.data[i].gp1,
              gp2: results.data[i].gp2,
              gp3: results.data[i].gp3,
              gp4: results.data[i].gp4,
              gp5: results.data[i].gp5,
              gp6: results.data[i].gp6,
              gp7: results.data[i].gp7,

              ce1: results.data[i].ce1,
              ce2: results.data[i].ce2,
              ce3: results.data[i].ce3,
              ce4: results.data[i].ce4,
              ce5: results.data[i].ce5,
              ce6: results.data[i].ce6,
              ce7: results.data[i].ce7,
              pe1: results.data[i].pe1,
              pe2: results.data[i].pe2,
              pe3: results.data[i].pe3,
              pe4: results.data[i].pe4,
              pe5: results.data[i].pe5,
              pe6: results.data[i].pe6,
              pe7: results.data[i].pe7,

              cgpa: results.data[i].cgpa,
              result: results.data[i].result
                
            };
            this.addIssuee(this.mca1,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
           this.test.push(studDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          this.updateresultcountfn(this.displayRsltID);
          this.updatepassedcountfn(this.displayPassID);
          this.updatefailedcountfn(this.displayFailID);
        }
      });
    }
  }

  impmca2(evt){
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let studDetails = {
              rollno: results.data[i].rollno,
              name: results.data[i].name,
              e1: results.data[i].e1,
              e2: results.data[i].e2,
              e3: results.data[i].e3,
              e4: results.data[i].e4,
              e5: results.data[i].e5,
              e6: results.data[i].e6,
              e7: results.data[i].e7,
              s1: results.data[i].s1,
              s2: results.data[i].s2,
              s3: results.data[i].s3,
              s4: results.data[i].s4,
              s5: results.data[i].s5,
              s6: results.data[i].s6,
              s7: results.data[i].s7,

              g1: results.data[i].g1,
              g2: results.data[i].g2,
              g3: results.data[i].g3,
              g4: results.data[i].g4,
              g5: results.data[i].g5,
              g6: results.data[i].g6,
              g7: results.data[i].g7,
              gp1: results.data[i].gp1,
              gp2: results.data[i].gp2,
              gp3: results.data[i].gp3,
              gp4: results.data[i].gp4,
              gp5: results.data[i].gp5,
              gp6: results.data[i].gp6,
              gp7: results.data[i].gp7,

              ce1: results.data[i].ce1,
              ce2: results.data[i].ce2,
              ce3: results.data[i].ce3,
              ce4: results.data[i].ce4,
              ce5: results.data[i].ce5,
              ce6: results.data[i].ce6,
              ce7: results.data[i].ce7,
              pe1: results.data[i].pe1,
              pe2: results.data[i].pe2,
              pe3: results.data[i].pe3,
              pe4: results.data[i].pe4,
              pe5: results.data[i].pe5,
              pe6: results.data[i].pe6,
              pe7: results.data[i].pe7,

              cgpa: results.data[i].cgpa,
              result: results.data[i].result
                
            };
            this.addIssuee(this.mca2,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
           this.test.push(studDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          this.updateresultcountfn(this.displayRsltID);
          this.updatepassedcountfn(this.displayPassID);
          this.updatefailedcountfn(this.displayFailID);
        }
      });
    }
  }

  impmca3(evt){
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let studDetails = {
              rollno: results.data[i].rollno,
              name: results.data[i].name,
              e1: results.data[i].e1,
              e2: results.data[i].e2,
              e3: results.data[i].e3,
              e4: results.data[i].e4,
              e5: results.data[i].e5,
              e6: results.data[i].e6,
              e7: results.data[i].e7,
              s1: results.data[i].s1,
              s2: results.data[i].s2,
              s3: results.data[i].s3,
              s4: results.data[i].s4,
              s5: results.data[i].s5,
              s6: results.data[i].s6,
              s7: results.data[i].s7,

              g1: results.data[i].g1,
              g2: results.data[i].g2,
              g3: results.data[i].g3,
              g4: results.data[i].g4,
              g5: results.data[i].g5,
              g6: results.data[i].g6,
              g7: results.data[i].g7,
              gp1: results.data[i].gp1,
              gp2: results.data[i].gp2,
              gp3: results.data[i].gp3,
              gp4: results.data[i].gp4,
              gp5: results.data[i].gp5,
              gp6: results.data[i].gp6,
              gp7: results.data[i].gp7,

              ce1: results.data[i].ce1,
              ce2: results.data[i].ce2,
              ce3: results.data[i].ce3,
              ce4: results.data[i].ce4,
              ce5: results.data[i].ce5,
              ce6: results.data[i].ce6,
              ce7: results.data[i].ce7,
              pe1: results.data[i].pe1,
              pe2: results.data[i].pe2,
              pe3: results.data[i].pe3,
              pe4: results.data[i].pe4,
              pe5: results.data[i].pe5,
              pe6: results.data[i].pe6,
              pe7: results.data[i].pe7,

              cgpa: results.data[i].cgpa,
              result: results.data[i].result
                
            };
            this.addIssuee(this.mca3,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
           this.test.push(studDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          this.updateresultcountfn(this.displayRsltID);
          this.updatepassedcountfn(this.displayPassID);
          this.updatefailedcountfn(this.displayFailID);
        }
      });
    }
    
  }

  impmca4(evt){
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let studDetails = {
              rollno: results.data[i].rollno,
              name: results.data[i].name,
              e1: results.data[i].e1,
              e2: results.data[i].e2,
              e3: results.data[i].e3,
              e4: results.data[i].e4,
              e5: results.data[i].e5,
              e6: results.data[i].e6,
              e7: results.data[i].e7,
              s1: results.data[i].s1,
              s2: results.data[i].s2,
              s3: results.data[i].s3,
              s4: results.data[i].s4,
              s5: results.data[i].s5,
              s6: results.data[i].s6,
              s7: results.data[i].s7,

              g1: results.data[i].g1,
              g2: results.data[i].g2,
              g3: results.data[i].g3,
              g4: results.data[i].g4,
              g5: results.data[i].g5,
              g6: results.data[i].g6,
              g7: results.data[i].g7,
              gp1: results.data[i].gp1,
              gp2: results.data[i].gp2,
              gp3: results.data[i].gp3,
              gp4: results.data[i].gp4,
              gp5: results.data[i].gp5,
              gp6: results.data[i].gp6,
              gp7: results.data[i].gp7,

              ce1: results.data[i].ce1,
              ce2: results.data[i].ce2,
              ce3: results.data[i].ce3,
              ce4: results.data[i].ce4,
              ce5: results.data[i].ce5,
              ce6: results.data[i].ce6,
              ce7: results.data[i].ce7,
              pe1: results.data[i].pe1,
              pe2: results.data[i].pe2,
              pe3: results.data[i].pe3,
              pe4: results.data[i].pe4,
              pe5: results.data[i].pe5,
              pe6: results.data[i].pe6,
              pe7: results.data[i].pe7,

              cgpa: results.data[i].cgpa,
              result: results.data[i].result
                
            };
            this.addIssuee(this.mca4,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
           this.test.push(studDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          this.updateresultcountfn(this.displayRsltID);
          this.updatepassedcountfn(this.displayPassID);
          this.updatefailedcountfn(this.displayFailID);
        }
      });
    }
  }

  impmca5(evt){
    this.resultcount =0;
    this.passcount=0;
    this.failcount=0;
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.papa.parse(csv, {
        skipEmptyLines: true,
        header: true,
        complete: (results) => {
          for (let i = 0; i < results.data.length; i++) {
            let studDetails = {
              rollno: results.data[i].rollno,
              name: results.data[i].name,
              e1: results.data[i].e1,
              e2: results.data[i].e2,
              e3: results.data[i].e3,
              e4: results.data[i].e4,
              e5: results.data[i].e5,
              e6: results.data[i].e6,
              e7: results.data[i].e7,
              s1: results.data[i].s1,
              s2: results.data[i].s2,
              s3: results.data[i].s3,
              s4: results.data[i].s4,
              s5: results.data[i].s5,
              s6: results.data[i].s6,
              s7: results.data[i].s7,

              g1: results.data[i].g1,
              g2: results.data[i].g2,
              g3: results.data[i].g3,
              g4: results.data[i].g4,
              g5: results.data[i].g5,
              g6: results.data[i].g6,
              g7: results.data[i].g7,
              gp1: results.data[i].gp1,
              gp2: results.data[i].gp2,
              gp3: results.data[i].gp3,
              gp4: results.data[i].gp4,
              gp5: results.data[i].gp5,
              gp6: results.data[i].gp6,
              gp7: results.data[i].gp7,

              ce1: results.data[i].ce1,
              ce2: results.data[i].ce2,
              ce3: results.data[i].ce3,
              ce4: results.data[i].ce4,
              ce5: results.data[i].ce5,
              ce6: results.data[i].ce6,
              ce7: results.data[i].ce7,
              pe1: results.data[i].pe1,
              pe2: results.data[i].pe2,
              pe3: results.data[i].pe3,
              pe4: results.data[i].pe4,
              pe5: results.data[i].pe5,
              pe6: results.data[i].pe6,
              pe7: results.data[i].pe7,

              cgpa: results.data[i].cgpa,
              result: results.data[i].result
                
            };
            this.addIssuee(this.mca5,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
           this.test.push(studDetails);
          }
          // console.log(this.test);
          console.log('Parsed: k', results.data);
          
          this.updateresultcountfn(this.displayRsltID);
          this.updatepassedcountfn(this.displayPassID);
          this.updatefailedcountfn(this.displayFailID);
        }
      });
    }
  }

  

 impmca6(evt){
  var files = evt.target.files; // FileList object
  var file = files[0];
  var reader = new FileReader();
  reader.readAsText(file);
  reader.onload = (event: any) => {
    var csv = event.target.result; // Content of CSV file
    this.papa.parse(csv, {
      skipEmptyLines: true,
      header: true,
      complete: (results) => {
        for (let i = 0; i < results.data.length; i++) {
          let studDetails = {
            rollno: results.data[i].rollno,
            name: results.data[i].name,
            e1: results.data[i].e1,
            e2: results.data[i].e2,
            e3: results.data[i].e3,
            e4: results.data[i].e4,
            e5: results.data[i].e5,
            e6: results.data[i].e6,
            e7: results.data[i].e7,
            s1: results.data[i].s1,
            s2: results.data[i].s2,
            s3: results.data[i].s3,
            s4: results.data[i].s4,
            s5: results.data[i].s5,
            s6: results.data[i].s6,
            s7: results.data[i].s7,

            g1: results.data[i].g1,
            g2: results.data[i].g2,
            g3: results.data[i].g3,
            g4: results.data[i].g4,
            g5: results.data[i].g5,
            g6: results.data[i].g6,
            g7: results.data[i].g7,
            gp1: results.data[i].gp1,
            gp2: results.data[i].gp2,
            gp3: results.data[i].gp3,
            gp4: results.data[i].gp4,
            gp5: results.data[i].gp5,
            gp6: results.data[i].gp6,
            gp7: results.data[i].gp7,

            ce1: results.data[i].ce1,
            ce2: results.data[i].ce2,
            ce3: results.data[i].ce3,
            ce4: results.data[i].ce4,
            ce5: results.data[i].ce5,
            ce6: results.data[i].ce6,
            ce7: results.data[i].ce7,
            pe1: results.data[i].pe1,
            pe2: results.data[i].pe2,
            pe3: results.data[i].pe3,
            pe4: results.data[i].pe4,
            pe5: results.data[i].pe5,
            pe6: results.data[i].pe6,
            pe7: results.data[i].pe7,

            cgpa: results.data[i].cgpa,
            result: results.data[i].result
              
          };
          this.addIssuee(this.mca5,studDetails.rollno, studDetails.name,studDetails.e1,studDetails.e2,studDetails.e3,studDetails.e4,studDetails.e5,studDetails.e6,studDetails.e7,studDetails.s1,studDetails.s2,studDetails.s3,studDetails.s4,studDetails.s5,studDetails.s6,studDetails.s7, studDetails.g1, studDetails.g2,studDetails.g3,studDetails.g4,studDetails.g5,studDetails.g6,studDetails.g7,studDetails.gp1,studDetails.gp2,studDetails.gp3,studDetails.gp4,studDetails.gp5,studDetails.gp6,studDetails.gp7,studDetails.ce1, studDetails.ce2,studDetails.ce3,studDetails.ce4,studDetails.ce5,studDetails.ce6,studDetails.ce7,studDetails.pe1,studDetails.pe2,studDetails.pe3,studDetails.pe4,studDetails.pe5,studDetails.pe6,studDetails.pe7, studDetails.cgpa,studDetails.result);
         this.test.push(studDetails);
        }
        // console.log(this.test);
        console.log('Parsed: k', results.data);
        this.updateresultcountfn(this.displayRsltID);
      }
    });
  }
  }

  test =[];



  addIssuee(semester,rollno, name,e1,e2,e3,e4,e5,e6,e7,s1,s2,s3,s4,s5,s6,s7,g1,g2,g3,g4,g5,g6,g7,gp1,gp2,gp3,gp4,gp5,gp6,gp7,ce1,ce2,ce3,ce4,ce5,ce6,ce7,pe1,pe2,pe3,pe4,pe5,pe6,pe7,cgpa,result) {
    if(result == 'PASS'){
      this.passcount=this.passcount+1;

    }
    else if(result=='FAIL'){
      this.failcount=this.failcount+1;
    }
    this.rescrud.addResult(semester,rollno, name,e1,e2,e3,e4,e5,e6,e7,s1,s2,s3,s4,s5,s6,s7,g1,g2,g3,g4,g5,g6,g7,gp1,gp2,gp3,gp4,gp5,gp6,gp7,ce1,ce2,ce3,ce4,ce5,ce6,ce7,pe1,pe2,pe3,pe4,pe5,pe6,pe7,cgpa,result) .subscribe(() => {
    
    });
  }
//RESULT COUNT FUNCTIONS
  resultcountfn(){
    this.dashboard.getresultCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayRsltID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  updateresultcountfn(id){
    var cnt= 0
    cnt=this.resultcount+1
    this.dashboard.updateresultCount(id,cnt).subscribe(()=>{
      
    });

  }

  //Passed COUNT FUNCTIONS
  passedcountfn(){
    this.dashboard.getpassedCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayPassID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  updatepassedcountfn(id){
    console.log('pass');
    this.dashboard.updatepassedCount(id,this.passcount).subscribe(()=>{
      
    });

  }


   //Passed COUNT FUNCTIONS
   failedcountfn(){
    this.dashboard.getfailedCount().
    subscribe((data: Cnt[])=>{
      //this.resultCount = data;
      this.displayFailID=data[0]._id;
      console.log(' data requested ..');
      console.log(data);
      
    })
    
  }

  updatefailedcountfn(id){
    
    this.dashboard.updatefailedCount(id,this.failcount).subscribe(()=>{
      
    });

  }



}
