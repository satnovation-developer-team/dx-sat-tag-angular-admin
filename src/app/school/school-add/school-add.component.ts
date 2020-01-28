import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.css']
})
export class SchoolAddComponent implements OnInit {
  public  overviewData = '<p>Note:Please add video functionality while doing integration</p>';
  constructor() { }

  ngOnInit() {
  }
  fileselect(value){
    console.log("hi")
      }
      tabledata = [
        { sr: 1, event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 2, event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 3, event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 4,  event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 5, event_image: "Add Image", event_name: "event name", event_date: "1/1/2019"  },
        { sr: 6,  event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 7, event_image: "Add Image", event_name: "event name", event_date: "1/1/2019" },
        { sr: 8,  event_image: "Add Image", event_name: "event name", event_date: "1/1/2019"  },
    
      ]
}
