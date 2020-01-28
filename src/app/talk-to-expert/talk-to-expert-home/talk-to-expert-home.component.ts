import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-to-expert-home',
  templateUrl: './talk-to-expert-home.component.html',
  styleUrls: ['./talk-to-expert-home.component.css']
})
export class TalkToExpertHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabledata = [
    {sr:1, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:2, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:3, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:4, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:5, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:6, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:7, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },
    {sr:8, college_image: "User Name", college_name: "RV College", course_list: "BE,ME,MCA" },

  ]
}
