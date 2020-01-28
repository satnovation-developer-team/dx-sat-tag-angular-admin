import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCollegeSchoolHomeComponent } from './top-college-school-home.component';

describe('TopCollegeSchoolHomeComponent', () => {
  let component: TopCollegeSchoolHomeComponent;
  let fixture: ComponentFixture<TopCollegeSchoolHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCollegeSchoolHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCollegeSchoolHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
