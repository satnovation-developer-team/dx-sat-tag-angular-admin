import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-privilage',
  templateUrl: './assign-privilage.component.html',
  styleUrls: ['./assign-privilage.component.css']
})
export class AssignPrivilageComponent implements OnInit {

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
