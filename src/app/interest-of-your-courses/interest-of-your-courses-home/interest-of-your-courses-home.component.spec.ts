import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestOfYourCoursesHomeComponent } from './interest-of-your-courses-home.component';

describe('InterestOfYourCoursesHomeComponent', () => {
  let component: InterestOfYourCoursesHomeComponent;
  let fixture: ComponentFixture<InterestOfYourCoursesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestOfYourCoursesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestOfYourCoursesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
