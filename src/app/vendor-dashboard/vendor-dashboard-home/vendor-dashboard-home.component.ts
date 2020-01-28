import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-dashboard-home',
  templateUrl: './vendor-dashboard-home.component.html',
  styleUrls: ['./vendor-dashboard-home.component.css']
})
export class VendorDashboardHomeComponent implements OnInit {

  school: boolean = false;
  college: boolean = true;
  schooladd: boolean = false;
  collegeadd: boolean = true;
  course: boolean = true;
  class: boolean = false;
  payment: boolean = false;
  payment_history: boolean = true;
  constructor() { }

  ngOnInit() {

  }
  colleges() {
    this.school = false;
    this.college = true;
  }
  schools() {
    this.school = true;
    this.college = false;
  }
  collegesadd() {
    this.schooladd = false;
    this.collegeadd = true;
  }
  schoolsadd() {
    this.schooladd = true;
    this.collegeadd = false;
  }
  courses() {
    this.course = false;
    this.class = true;
  }
  classes() {
    this.course = true;
    this.class = false;
  }


  paymenthistory() {
    this.payment = false;
    this.payment_history = true;
  }
  payments() {
    this.payment = true;
    this.payment_history = false;
  }



  isShown1: boolean = false;
  toggleShow1() {
    this.isShown1 = !this.isShown1;
  }

  isShown2: boolean = false;
  toggleShow2() {
    this.isShown2 = !this.isShown1;
  }
  isShown3: boolean = false;
  toggleShow3() {
    this.isShown3 = !this.isShown3;
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
    { sr: 1, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 2, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 3, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 4, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 5, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 6, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 7, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },
    { sr: 8, user_name: "first Name Middle Name Last Name ", vendor_name: "vendor name", college_school_name: "RV College", course_class_name: "12th" },

  ]
  tabledatafees = [
    { sr: 1, college_school: "college name", course: "course name", specialization: "specialization name", installements: "4", fees_type: "exam fees" },
    { sr: 2, college_school: "college name", course: "course name", specialization: "specialization name", installements: "8", fees_type: "exam fees" },
    { sr: 3, college_school: "college name", course: "course name", specialization: "specialization name", installements: "2", fees_type: "exam fees" },
    { sr: 4, college_school: "college name", course: "course name", specialization: "specialization name", installements: "5", fees_type: "exam fees" },
    { sr: 5, college_school: "college name", course: "course name", specialization: "specialization name", installements: "3", fees_type: "exam fees" },
    { sr: 6, college_school: "college name", course: "course name", specialization: "specialization name", installements: "6", fees_type: "exam fees" },
    { sr: 7, college_school: "college name", course: "course name", specialization: "specialization name", installements: "2", fees_type: "exam fees" },
    { sr: 8, college_school: "college name", course: "course name", specialization: "specialization name", installements: "1", fees_type: "exam fees" },

  ]
  tabledatafeesmaster = [
    { sr: 1, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 2, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 3, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 4, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 5, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 6, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 7, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 8, class: "college", title: "Exam Fees", link: "click here" },

  ]

}