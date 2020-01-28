import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeMessagesComponent } from './college-messages.component';

describe('CollegeMessagesComponent', () => {
  let component: CollegeMessagesComponent;
  let fixture: ComponentFixture<CollegeMessagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeMessagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
