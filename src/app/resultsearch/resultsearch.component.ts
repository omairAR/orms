import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, Validator } from '@angular/forms'


@Component({
  selector: 'app-resultsearch',
  templateUrl: './resultsearch.component.html',
  styleUrls: ['./resultsearch.component.css']
})
export class ResultsearchComponent implements OnInit {

  public rno =0;

  public searchForm = this.fb.group({
    rollno: ['', Validators.required],
    course: ['', Validators.required],
    semester: ['', Validators.required]
  })

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {  
    console.log('you submitted value:', form.rollno);  

    if(form.rollno == "" || form.course == "" || form.semester == ""){
      this.router.navigate(['/resultsearch']);
    }else if(form.rollno != "" && form.course != "" && form.semester != ""){
      this.router.navigate(['/resultview/', form.rollno, form.course, form.semester])
    }
    
    //this.router.navigate(['/resultview/'+form.rollno+"/"+form.course+"/"+form.semester])
  }

  



}
