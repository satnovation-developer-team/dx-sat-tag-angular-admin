import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerWithUsViewSchoolComponent } from './patner-with-us-view-school.component';

describe('PatnerWithUsViewSchoolComponent', () => {
  let component: PatnerWithUsViewSchoolComponent;
  let fixture: ComponentFixture<PatnerWithUsViewSchoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnerWithUsViewSchoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerWithUsViewSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
