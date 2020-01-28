import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';
import { CommonUrlsService } from '../../shared/services/common-urls.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application-service-charge-add',
  templateUrl: './application-service-charge-add.component.html',
  styleUrls: ['./application-service-charge-add.component.css']
})
export class ApplicationServiceChargeAddComponent implements OnInit, OnDestroy {

  applicationServiceChargeForm: FormGroup;

  invalidError = false;

  applicationServiceChargeSubmitted = false;

  applicationServiceChargeFormControl: any;

  applicationServiceChargeFormValidations = {
    'education': [
      { type: 'required', message: 'Location Name is required' }
    ],
    'college_school_name': [
      { type: 'required', message: 'Latitude is required' }
    ],
    'from_date': [
      { type: 'required', message: 'Longitude is required' }
    ],
    'to_date': [
      { type: 'required', message: 'Latitude is required' }
    ],
    'application_charges': [
      { type: 'required', message: 'Longitude is required' }
    ],
    'service_charges': [
      { type: 'required', message: 'Longitude is required' }
    ],
  };

  subscriptions = {
    application_service_charge_store: null,
  };

  constructor(public dataService: DataService, public CUS: CommonUrlsService, private router: Router) {
    this.InitializeApplicationServiceChargeForm();
   }

  ngOnInit() {
    this.applicationServiceChargeFormControl = this.applicationServiceChargeForm.controls;
  }

  InitializeApplicationServiceChargeForm()
  {
    this.applicationServiceChargeForm = new FormGroup({
      education: new FormControl('', [Validators.required]),
      college_school_name: new FormControl('', [Validators.required]),
      from_date: new FormControl('', [Validators.required]),
      to_date: new FormControl('', [Validators.required]),
      application_charges: new FormControl('', [Validators.required]),
      service_charges: new FormControl('', [Validators.required])

    });
  }

  applicationServiceChargeFormSubmit() {
    this.applicationServiceChargeSubmitted = true;
    if (this.applicationServiceChargeForm.valid) {
      this.subscriptions.application_service_charge_store = this.dataService.storeData('appcharges/application_charge', this.applicationServiceChargeForm.value).subscribe((res) => {
        if (res.result) {
          this.router.navigate([this.CUS._URL.APPLICATION_SERVICE_CHARGE_LIST]);
        }
      }),
        (error) => {
        }
    }
    else { this.applicationServiceChargeForm.invalid; }
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
