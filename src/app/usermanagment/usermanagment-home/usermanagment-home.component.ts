import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usermanagment-home',
  templateUrl: './usermanagment-home.component.html',
  styleUrls: ['./usermanagment-home.component.css']
})
export class UsermanagmentHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { user_name: "Role Name", mobile_number: "Active",  },
    { user_name: "Role Name", mobile_number: "Active",  },
    { user_name: "Role Name", mobile_number: "InActive",  },
    { user_name: "Role Name", mobile_number: "Active",  },
    { user_name: "Role Name", mobile_number: "Active",  },
    { user_name: "Role Name", mobile_number: "Active",  },
    {user_name:"Role Name",mobile_number:"InActive",},
    {user_name:"Role Name",mobile_number:"Active",}
  ]
}
