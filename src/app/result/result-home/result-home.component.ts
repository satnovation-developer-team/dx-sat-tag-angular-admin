import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-home',
  templateUrl: './result-home.component.html',
  styleUrls: ['./result-home.component.css']
})
export class ResultHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { board_name: "CBSE", class: "10th Class", title: "Punjab", link: "click here" },
    { board_name: "CBSE", class: "11th Class", title: "Gujrat", link: "click here" },
    { board_name: "CBSE", class: "12th Class", title: "Delhi", link: "click here" },
    { board_name: "CBSE", class: "11th Class", title: "Assam", link: "click here" },
    { board_name: "CBSE", class: "11th Class", title: "Punjab", link: "click here" },


  ]
}
