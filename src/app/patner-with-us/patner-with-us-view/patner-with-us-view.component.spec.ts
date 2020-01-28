import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatnerWithUsViewComponent } from './patner-with-us-view.component';

describe('PatnerWithUsViewComponent', () => {
  let component: PatnerWithUsViewComponent;
  let fixture: ComponentFixture<PatnerWithUsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatnerWithUsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatnerWithUsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
