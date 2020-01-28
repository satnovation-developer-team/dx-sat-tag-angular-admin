import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent implements OnInit {
  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }
  fileselect(value){
    console.log("hi")
      }
}
