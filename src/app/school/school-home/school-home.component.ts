import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.css']
})
export class SchoolHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabledata = [
    {sr:1, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:2, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:3, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:4, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:5, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:6, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:7, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },
    {sr:8, college_image: "User Name", college_name: "Tagore Matric Hr SEc School", course_list: "LKG to 12 th" },

  ]

}
