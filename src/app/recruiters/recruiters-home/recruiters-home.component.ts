import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recruiters-home',
  templateUrl: './recruiters-home.component.html',
  styleUrls: ['./recruiters-home.component.css']
})
export class RecruitersHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    {sr:1, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:2, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:3, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:4, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:5, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:6, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:7, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
    {sr:8, company_logo: "User Name", company_name: "ICICI Group", company_domain: "Banking and finanacial", company_location: "Mumbai,Maharastra" },
  ]
}
