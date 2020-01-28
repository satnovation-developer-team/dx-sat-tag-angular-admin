import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeDashboardHomeComponent } from './college-dashboard-home.component';

describe('CollegeDashboardHomeComponent', () => {
  let component: CollegeDashboardHomeComponent;
  let fixture: ComponentFixture<CollegeDashboardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeDashboardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeDashboardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
