import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-college-edit-login-credentials',
  templateUrl: './college-edit-login-credentials.component.html',
  styleUrls: ['./college-edit-login-credentials.component.css']
})
export class CollegeEditLoginCredentialsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @HostListener('window:keydown.control', ['$event'])
  KeyDownCtrl(event: KeyboardEvent) {
    console.log("KeyDownCtrl", event);
  }

}
