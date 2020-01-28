import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationFormHomeComponent } from './application-form-home.component';

describe('ApplicationFormHomeComponent', () => {
  let component: ApplicationFormHomeComponent;
  let fixture: ComponentFixture<ApplicationFormHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationFormHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationFormHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
