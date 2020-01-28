import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-talk-to-counseller-home',
  templateUrl: './talk-to-counseller-home.component.html',
  styleUrls: ['./talk-to-counseller-home.component.css']
})
export class TalkToCounsellerHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  show:boolean=false;
  view(){
this.show= !this.show;
  }
  datacard=[
    {username:"username",date:"date",time:"time",new:"New *"},
    {username:"username",date:"date",time:"time",new:"New *"},
    {username:"username",date:"date",time:"time",new:"New *"}
  ]
}
