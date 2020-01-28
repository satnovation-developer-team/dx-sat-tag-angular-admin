import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSinglePageHomeComponent } from './courses-single-page-home.component';

describe('CoursesSinglePageHomeComponent', () => {
  let component: CoursesSinglePageHomeComponent;
  let fixture: ComponentFixture<CoursesSinglePageHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSinglePageHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSinglePageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
