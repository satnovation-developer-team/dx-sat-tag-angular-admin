import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationServiceChargeHomeComponent } from './application-service-charge-home.component';

describe('ApplicationServiceChargeHomeComponent', () => {
  let component: ApplicationServiceChargeHomeComponent;
  let fixture: ComponentFixture<ApplicationServiceChargeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationServiceChargeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationServiceChargeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
