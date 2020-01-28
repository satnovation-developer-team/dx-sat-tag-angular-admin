import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assumption-privilege',
  templateUrl: './assumption-privilege.component.html',
  styleUrls: ['./assumption-privilege.component.css']
})
export class AssumptionPrivilegeComponent implements OnInit {

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


