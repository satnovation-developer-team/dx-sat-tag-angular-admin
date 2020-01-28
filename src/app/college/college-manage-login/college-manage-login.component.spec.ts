import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeManageLoginComponent } from './college-manage-login.component';

describe('CollegeManageLoginComponent', () => {
  let component: CollegeManageLoginComponent;
  let fixture: ComponentFixture<CollegeManageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeManageLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeManageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
