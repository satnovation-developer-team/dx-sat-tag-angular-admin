import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerWithUsViewCollegeComponent } from './patner-with-us-view-college.component';

describe('PatnerWithUsViewCollegeComponent', () => {
  let component: PatnerWithUsViewCollegeComponent;
  let fixture: ComponentFixture<PatnerWithUsViewCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnerWithUsViewCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerWithUsViewCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
