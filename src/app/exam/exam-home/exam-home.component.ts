import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exam-home',
  templateUrl: './exam-home.component.html',
  styleUrls: ['./exam-home.component.css']
})
export class ExamHomeComponent implements OnInit {
  public  overviewDataAnswerKey = '<p>PDF should be able to upload through text editor</p>';
  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }

}
