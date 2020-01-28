import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patner-with-us-home',
  templateUrl: './patner-with-us-home.component.html',
  styleUrls: ['./patner-with-us-home.component.css']
})
export class PatnerWithUsHomeComponent implements OnInit {
  school: boolean = false;
  college: boolean = false;
  vendor: boolean = false;
  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { sr: 1, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 2, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 3, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 4, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 5, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 6, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 7, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },
    { sr: 8, name: "first Name Middle Name Last Name ", type: "vendor", organization_name: "ABC Technologies", location: "location name" },

  ]

  colleges(){}
  schools(){}
  vendors(){}
}
