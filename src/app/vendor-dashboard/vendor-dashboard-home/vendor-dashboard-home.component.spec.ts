import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardHomeComponent } from './vendor-dashboard-home.component';

describe('VendorDashboardHomeComponent', () => {
  let component: VendorDashboardHomeComponent;
  let fixture: ComponentFixture<VendorDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
