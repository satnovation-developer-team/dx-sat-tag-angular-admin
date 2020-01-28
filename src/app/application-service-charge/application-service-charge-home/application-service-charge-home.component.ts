import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-application-service-charge-home',
  templateUrl: './application-service-charge-home.component.html',
  styleUrls: ['./application-service-charge-home.component.css']
})
export class ApplicationServiceChargeHomeComponent implements OnInit, OnDestroy {

  subscriptions = {
    application_service_charge_get: null
  };

  application_service_charge: any;

  constructor(public dataService: DataService) { }

  ngOnInit() {

    this.listApplicationServiceCharges();

  }
  
  listApplicationServiceCharges() {
    this.subscriptions.application_service_charge_get = this.dataService.getListData('appcharges/get_charge').subscribe((res) => {
      if (res.result) {
        this.application_service_charge = res.result;
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
