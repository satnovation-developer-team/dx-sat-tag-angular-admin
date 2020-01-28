import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fees-setup',
  templateUrl: './fees-setup.component.html',
  styleUrls: ['./fees-setup.component.css']
})
export class FeesSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tabledata = [
    { sr: 1, college_school: "college name",course:"course name", specialization: "specialization name",installements:"4",fees_type: "exam fees" },
    { sr: 2, college_school: "college name",course:"course name", specialization: "specialization name",installements:"8", fees_type: "exam fees"  },
    { sr: 3, college_school: "college name",course:"course name", specialization: "specialization name",installements:"2", fees_type: "exam fees" },
    { sr: 4, college_school: "college name",course:"course name", specialization: "specialization name",installements:"5", fees_type: "exam fees"  },
    { sr: 5,  college_school: "college name",course:"course name", specialization: "specialization name", installements:"3",fees_type: "exam fees" },
    { sr: 6, college_school: "college name",course:"course name", specialization: "specialization name",installements:"6", fees_type: "exam fees"  },
    { sr: 7, college_school: "college name",course:"course name", specialization: "specialization name",installements:"2", fees_type: "exam fees" },
    { sr: 8,  college_school: "college name",course:"course name", specialization: "specialization name",installements:"1", fees_type: "exam fees"  },

  ]
}
