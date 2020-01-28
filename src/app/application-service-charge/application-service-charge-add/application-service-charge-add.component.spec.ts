import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationServiceChargeAddComponent } from './application-service-charge-add.component';

describe('ApplicationServiceChargeAddComponent', () => {
  let component: ApplicationServiceChargeAddComponent;
  let fixture: ComponentFixture<ApplicationServiceChargeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationServiceChargeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationServiceChargeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
