import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
@Component({
  selector: 'app-courses-single-page-home',
  templateUrl: './courses-single-page-home.component.html',
  styleUrls: ['./courses-single-page-home.component.css']
})
export class CoursesSinglePageHomeComponent implements OnInit {

  subscriptions = {
    course_get: null
  };

  courseList = [];

  constructor(public dataService: DataService) { }

  ngOnInit() {
    this.listCourse();
  }

  listCourse(){
    this.subscriptions.course_get = this.dataService.getListData('courses').subscribe((res) => {
      if (res.result) {
        this.courseList = res.result;
      }
    }),
      (error) => {
      }
  }
  

}
