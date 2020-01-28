import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagement-edit',
  templateUrl: './usermanagement-edit.component.html',
  styleUrls: ['./usermanagement-edit.component.css']
})
export class UsermanagementEditComponent implements OnInit {
  
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
  constructor() { }

  ngOnInit() {
  }

}
