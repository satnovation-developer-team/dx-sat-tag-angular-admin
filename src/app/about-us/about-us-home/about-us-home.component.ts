import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-home',
  templateUrl: './about-us-home.component.html',
  styleUrls: ['./about-us-home.component.css']
})
export class AboutUsHomeComponent implements OnInit {
  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }

}
