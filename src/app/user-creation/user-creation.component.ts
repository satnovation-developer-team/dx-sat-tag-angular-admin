import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { user_name: "Role Name", mobile_number: "User  Name",  },
    { user_name: "Role Name", mobile_number: "User  Name",  },
    { user_name: "Role Name", mobile_number: "User  Name",  },
    { user_name: "Role Name", mobile_number: "User  Name",  },
    { user_name: "Role Name", mobile_number: "User  Name",  },
    { user_name: "Role Name", mobile_number: "User  Name",  },
    {user_name:"Role Name",mobile_number:"User  Name",},
    {user_name:"Role Name",mobile_number:"User  Name",}
  ]

}
