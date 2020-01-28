import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllIndiaBoardHomeComponent } from './all-india-board-home.component';

describe('AllIndiaBoardHomeComponent', () => {
  let component: AllIndiaBoardHomeComponent;
  let fixture: ComponentFixture<AllIndiaBoardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllIndiaBoardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllIndiaBoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
