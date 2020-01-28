import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-responded-application-form',
  templateUrl: './college-responded-application-form.component.html',
  styleUrls: ['./college-responded-application-form.component.css']
})
export class CollegeRespondedApplicationFormComponent implements OnInit {

  vendor:boolean=false;
  user:boolean=true;
    constructor() { }
  
    ngOnInit() {
      
    }
    users(){
  this.vendor=false;
  this.user=true;
    }
    vendors(){
      this.vendor=true;
      this.user=false;
    }
    tabledata = [
      { sr: 1, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 2, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 3, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 4, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 5, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 6, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 7, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 8, user_name: "first Name Middle Name Last Name ", college_school_name: "RV College", course_class_name: "12th" },
  
    ]
  
    tabledata2 = [
      { sr: 1, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name",college_school_name: "RV College", course_class_name: "12th" },
      { sr: 2, user_name: "first Name Middle Name Last Name ",  vendor_name:"vendor name",college_school_name: "RV College", course_class_name: "12th" },
      { sr: 3, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 4, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 5, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 6, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 7, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
      { sr: 8, user_name: "first Name Middle Name Last Name ", vendor_name:"vendor name", college_school_name: "RV College", course_class_name: "12th" },
  
    ]
  }
  