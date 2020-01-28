import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeDashboardLoginComponent } from './college-dashboard-login.component';

describe('CollegeDashboardLoginComponent', () => {
  let component: CollegeDashboardLoginComponent;
  let fixture: ComponentFixture<CollegeDashboardLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeDashboardLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeDashboardLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
