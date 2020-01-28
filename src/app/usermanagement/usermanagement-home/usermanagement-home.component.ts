import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement-home',
  templateUrl: './usermanagement-home.component.html',
  styleUrls: ['./usermanagement-home.component.css']
})
export class UsermanagementHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    { user_name: "User Name", mobile_number: "985_789_4567", email_address: "abc@gmail.com", location: "City Name" },
    {user_name:"User Name",mobile_number:"985_789_4567",email_address:"abc@gmail.com",location:"City Name"},
    {user_name:"User Name",mobile_number:"985_789_4567",email_address:"abc@gmail.com",location:"City Name"}
  ]

}
