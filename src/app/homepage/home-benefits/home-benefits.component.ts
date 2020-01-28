import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-benefits',
  templateUrl: './home-benefits.component.html',
  styleUrls: ['./home-benefits.component.css']
})
export class HomeBenefitsComponent implements OnInit {

  public  overviewData = '<p>Note:Please add text or video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }
  fileselect(value){
    console.log("hi")
      }
}
