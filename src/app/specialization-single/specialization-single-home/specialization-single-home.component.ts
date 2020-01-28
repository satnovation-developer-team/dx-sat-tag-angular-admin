import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-specialization-single-home',
  templateUrl: './specialization-single-home.component.html',
  styleUrls: ['./specialization-single-home.component.css']
})
export class SpecializationSingleHomeComponent implements OnInit, OnDestroy {

  subscriptions = {
    specialization_get: null
  };

  specialization = [];

  constructor(public dataService:DataService) { 
    this.listSpecialization();
  }

  ngOnInit() {
  }

  listSpecialization()
  {
    this.subscriptions.specialization_get = this.dataService.getListData('specialization').subscribe((res) => {
      if (res.result) {
        this.specialization = res.result;
      }
    }),
      (error) => {
      }
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      for (let sub in this.subscriptions) {
        if (this.subscriptions[sub]) {
          this.subscriptions[sub].unsubscribe();
        }
      }
    }
  }

}
