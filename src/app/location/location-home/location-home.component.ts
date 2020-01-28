import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-location-home',
  templateUrl: './location-home.component.html',
  styleUrls: ['./location-home.component.css']
})
export class LocationHomeComponent implements OnInit, OnDestroy {

  locationForm: FormGroup;

  invalidError = false;

  locationSubmitted = false;

  locationFormControl: any;

  locationFormValidations = {
    'location_name': [
      { type: 'required', message: 'Location Name is required' }
    ],
    'latitude': [
      { type: 'required', message: 'Latitude is required' }
    ],
    'longitude': [
      { type: 'required', message: 'Longitude is required' }
    ],
  };

  subscriptions = {
    location_store: null,
    location_get: null
  };

  location = [];


  constructor(public dataService: DataService) {
    this.InitializeLocationForm();
   }

  ngOnInit() {
    this.locationFormControl = this.locationForm.controls;

    this.listLocation();
  }

  InitializeLocationForm() {
    
    this.locationForm = new FormGroup({
      location_name: new FormControl('', [Validators.required]),
      latitude: new FormControl('', [Validators.required]),
      longitude: new FormControl('', [Validators.required])
    });
  }

  listLocation()
  {
    this.subscriptions.location_get = this.dataService.getListData('locations').subscribe((res) => {
      if (res.result) {
        this.location = res.result;
      }
    }),
      (error) => {
      }
  }

  locationFormSubmit()
  {
    this.locationSubmitted = true;
    if (this.locationForm.valid) { 
      this.subscriptions.location_store = this.dataService.storeData('locations', this.locationForm.value).subscribe((res) => {
        if (res.result) {
          this.listLocation();
        }
      }),
        (error) => {
        }
    }
    else { this.locationForm.invalid; }
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
