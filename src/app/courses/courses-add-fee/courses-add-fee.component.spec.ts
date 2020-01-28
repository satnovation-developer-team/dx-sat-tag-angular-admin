import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesAddFeeComponent } from './courses-add-fee.component';

describe('CoursesAddFeeComponent', () => {
  let component: CoursesAddFeeComponent;
  let fixture: ComponentFixture<CoursesAddFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesAddFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesAddFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
