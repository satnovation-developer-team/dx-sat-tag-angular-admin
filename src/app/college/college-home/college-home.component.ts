import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-home',
  templateUrl: './college-home.component.html',
  styleUrls: ['./college-home.component.css']
})
export class CollegeHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    {sr:1, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210",course_list: "BE,ME,MCA" },
    {sr:2, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:3, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:4, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:5, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:6, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:7, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },
    {sr:8, college_image: "User Name", college_name: "RV College",email:"abc@gmail.com",mobile_number:"9876543210", course_list: "BE,ME,MCA" },

  ]
}
