import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilaties-home',
  templateUrl: './facilaties-home.component.html',
  styleUrls: ['./facilaties-home.component.css']
})
export class FacilatiesHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  tabledata = [
    {sr:1, company_logo: "User Name", company_name: "Facilaties 1", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:2, company_logo: "User Name", company_name: "Facilaties 2", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:3, company_logo: "User Name", company_name: "Facilaties 3", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:4, company_logo: "User Name", company_name: "Facilaties 4", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:5, company_logo: "User Name", company_name: "Facilaties 5", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    
  ]

}
