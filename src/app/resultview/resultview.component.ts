import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router'
import  jspdf from 'jspdf'; 
import html2canvas from 'html2canvas';

import { ResultCrudService } from '../Services/result-crud.service';

import {Result} from '../models/result.model'

import { ExportAsService, ExportAsConfig } from 'ngx-export-as';


export interface TableHeads {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'app-resultview',
  templateUrl: './resultview.component.html',
  styleUrls: ['./resultview.component.css']
})
export class ResultviewComponent implements OnInit {


  exportAsConfig: ExportAsConfig = {
    type: 'png', // the type you want to download
    elementIdOrContent: 'parent_div' // the id of html/table element
  }

  constructor(
     private route: ActivatedRoute,
     private router: Router,
     private resultCRUD: ResultCrudService,
     private exportAsService: ExportAsService,
    ) { }

    
  
  public rollno ="";
  public course="";
  public semester="";

  paperCodes: Array<string>;
  paperTitles: Array<string>;

  public  fresult: Result[];

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let rollno =params.get('rollno');
      this.rollno=rollno;
      let course = params.get('course');
      this.course=course;
      let semester =params.get('semester');
      
      this.semester=semester;
      
      
    })

    this.paperCodesGenerator(this.semester);
    const rollnotopass=this.rollno;
    const courseSemtoPass = this.course+this.semester;

    //console.log(courseSemtoPass);
    this.fetchSamples(rollnotopass,courseSemtoPass);


  }

  onSubmit(){
    console.log("clicked");
    this.router.navigate(['/resultsearch']);
  }

  
  
  paperCodesGenerator(semester){

    switch(semester) { 
      case "I": {
        this.paperCodes = ["MCA-101", "MCA-102", "MCA-103", "MCA-DE11", "MCA-OE11", "MCA-104", "MCA-105"];
        this.paperTitles=["Programmin and problem Solving in c", "Discrete Computer Mathematics",
        "Computer based Numerical and Statistical Techiniques", "Computer Organization and archietecture",
        "accounting and Financial Management", "C Programming lab", "Computer based Numerical and Statistical Techiniques Lab"
      ]
        break; 
      } 
      case "II": { 
        this.paperCodes = ["MCA-201", "MCA-202", "MCA-203", "MCA-204", "MCA-OE21", "MCA-205", "MCA-206"];
        this.paperTitles=["System Software And Assembly Language Programming", "Data Structures",
                          "OOPs using C++", "Software Engineering",
                          "Organizational Structure and personal Managememt", "Data Structures Lab", "OPPS using C++ Lab"
                        ]
        break; 
      }
      case "III": { 
        this.paperCodes = ["MCA-301", "MCA-302", "MCA-303", "MCA-304", "MCA-305", "MCA-306", "MCA-307"];
        this.paperTitles=["Data Communication and Computer Networks", "Operating Systems",
        "Database Management Systems", "Design and analysis of algorithms",
        "Java Programming", "Database Management Systems Lab", "Java Programming Lab"
      ]
        break; 
      } 
      case "IV": { 
        this.paperCodes = ["MCA-DE21", "MCA-DE31", "MCA-DE44", "MCA-401", "MCA-402", "MCA-403", "MCA-404"];
        this.paperTitles=["Software Testing", "Data Warehousing and data mining",
                          "Computer Intelligence", "Formal Languages and Automata Theory",
                          "Unix and Shell Programming", "Unix and Shell Programming Lab", "Lab based on DE-2"
                        ] 
        break; 
      }
      case "V": { 
        this.paperCodes = ["MCA-501", "MCA-502", "MCA-503", "MCA-DE51", "MCA-DE61", "MCA-506", "MCA-507"];
        this.paperTitles=["Advanced Java", "Web Technology",
                          "Comppiler Design", "Artificial Intelligence",
                          "Big Data", "Advanced Java Lab", "Web Technology Lab"
                        ]
        break; 
      } 
      case "VI": { 
        console.log(semester[0].semv); 
        break; 
      }
      
   } 

  }

  fetchSamples(rollnotopass,courseSemtoPass){
    this.resultCRUD.
    getResultByRoll(rollnotopass,courseSemtoPass)
    .subscribe((data: Result[])=>{
      this.fresult = data;
      console.log(' data requested ..');
      console.log(this.fresult);
    })
  }

  

  tableHeads: TableHeads[] = [
    {text: 'Paper Code', cols: 2, rows: 3, color: 'lightblue'},
    {text: 'Title of Paper', cols: 6, rows: 3, color: 'lightgreen'},
    {text: 'Marks Statement', cols: 10, rows: 1, color: 'lightpink'},
    {text: 'Grades Statement', cols: 8, rows: 1, color: '#DDBDF1'},
    {text: 'Sessional', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Exmanition', cols: 4, rows: 1, color: 'lightgreen'},
    {text: 'Total', cols: 3, rows: 1, color: '#DDBDF1'},
    {text: 'Grade', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Grade Point', cols: 2, rows: 2, color: 'lightblue'},
    {text: 'Credits Earned', cols: 2, rows: 2, color: 'lightgreen'},
    {text: 'Points Earned', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Obtd', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Max', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Obtd', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Max', cols: 2, rows: 1, color: 'lightblue'},
    {text: 'Obtd', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Max', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  exportAsPDF()
    {
      console.log("print")

    /*  // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, 'My File Name').subscribe(() => {
      // save started
    });*/
    /*
      let data = document.getElementById('parent_div');  
        html2canvas(data).then(canvas => {
          console.log(canvas);

          
          
          
          
          var imageData = canvas.toDataURL('image/png');
          let doc = new jspdf('p', 'cm', 'a4');

          var position = 0;

          doc.addImage(imageData,'PNG', 0, position, 29.7, 21.0);

          doc.save("result.pdf")
          */

        /*const contentDataURL = canvas.toDataURL('image/png')  
        let pdf = new jspdf('p', 'cm', 'a4'); //Generates PDF in landscape mode
        // let pdf = new jspdf('p', 'cm', 'a4'); Generates PDF in portrait mode
        pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);  
        pdf.save('Filename.pdf');  
      }); */

      window.print();
    }

}
