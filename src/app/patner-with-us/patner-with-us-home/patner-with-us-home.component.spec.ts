import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerWithUsHomeComponent } from './patner-with-us-home.component';

describe('PatnerWithUsHomeComponent', () => {
  let component: PatnerWithUsHomeComponent;
  let fixture: ComponentFixture<PatnerWithUsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnerWithUsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerWithUsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
