import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialization-single-add',
  templateUrl: './specialization-single-add.component.html',
  styleUrls: ['./specialization-single-add.component.css']
})
export class SpecializationSingleAddComponent implements OnInit {

  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }
  fileselect(value){
    console.log("hi")
      }
}
