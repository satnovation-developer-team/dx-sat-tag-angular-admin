import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorDashboardLoginComponent } from './vendor-dashboard-login.component';

describe('VendorDashboardLoginComponent', () => {
  let component: VendorDashboardLoginComponent;
  let fixture: ComponentFixture<VendorDashboardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorDashboardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorDashboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
