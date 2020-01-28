import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeEditLoginCredentialsComponent } from './college-edit-login-credentials.component';

describe('CollegeEditLoginCredentialsComponent', () => {
  let component: CollegeEditLoginCredentialsComponent;
  let fixture: ComponentFixture<CollegeEditLoginCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeEditLoginCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeEditLoginCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
