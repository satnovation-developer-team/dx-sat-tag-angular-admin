import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-fees-master',
  templateUrl: './all-fees-master.component.html',
  styleUrls: ['./all-fees-master.component.css']
})
export class AllFeesMasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { sr: 1, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 2, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 3, class: "college", title: "Exam Fees", link: "click here"},
    { sr: 4, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 5, class: "college", title: "Exam Fees", link: "click here"},
    { sr: 6, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 7, class: "college", title: "Exam Fees", link: "click here" },
    { sr: 8, class: "college", title: "Exam Fees", link: "click here" },

  ]
}