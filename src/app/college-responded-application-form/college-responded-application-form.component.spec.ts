import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeRespondedApplicationFormComponent } from './college-responded-application-form.component';

describe('CollegeRespondedApplicationFormComponent', () => {
  let component: CollegeRespondedApplicationFormComponent;
  let fixture: ComponentFixture<CollegeRespondedApplicationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeRespondedApplicationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeRespondedApplicationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
