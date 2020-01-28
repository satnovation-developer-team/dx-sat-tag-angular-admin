import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-college-messages',
  templateUrl: './college-messages.component.html',
  styleUrls: ['./college-messages.component.css']
})
export class CollegeMessagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
messagedata=[{sr_no:"1",college_name:"Rv College",date:"23-12-2019",message:"HI,how are you? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{sr_no:"2",college_name:"Rv College",date:"21-12-2019",message:"HI,how are you? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
{sr_no:"3",college_name:"Rv College",date:"13-11-2019",message:"HI,how are you? Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]

}
