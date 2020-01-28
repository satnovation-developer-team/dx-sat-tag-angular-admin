import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSinglePageAddComponent } from './courses-single-page-add.component';

describe('CoursesSinglePageAddComponent', () => {
  let component: CoursesSinglePageAddComponent;
  let fixture: ComponentFixture<CoursesSinglePageAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesSinglePageAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSinglePageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
