import { Component } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'admin-tag';
  activeLogin:boolean;

  constructor(public router: Router, public location: Location)
  {
    router.events.subscribe(val => {
      if (location.path() === "" || location.path() === "/login") {
        this.activeLogin = true;
      } else {
        this.activeLogin = false;
      }
    });
  }
}
