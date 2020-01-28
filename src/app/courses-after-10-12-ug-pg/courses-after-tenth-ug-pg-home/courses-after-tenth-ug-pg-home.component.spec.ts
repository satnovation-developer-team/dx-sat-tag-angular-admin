import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAfterTenthUgPgHomeComponent } from './courses-after-tenth-ug-pg-home.component';

describe('CoursesAfterTenthUgPgHomeComponent', () => {
  let component: CoursesAfterTenthUgPgHomeComponent;
  let fixture: ComponentFixture<CoursesAfterTenthUgPgHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAfterTenthUgPgHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAfterTenthUgPgHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
