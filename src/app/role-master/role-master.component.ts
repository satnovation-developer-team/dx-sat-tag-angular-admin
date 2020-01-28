import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.css']
})
export class RoleMasterComponent implements OnInit {

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
