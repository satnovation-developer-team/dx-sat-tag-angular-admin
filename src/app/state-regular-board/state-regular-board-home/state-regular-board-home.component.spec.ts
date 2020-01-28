import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StateRegularBoardHomeComponent } from './state-regular-board-home.component';

describe('StateRegularBoardHomeComponent', () => {
  let component: StateRegularBoardHomeComponent;
  let fixture: ComponentFixture<StateRegularBoardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StateRegularBoardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StateRegularBoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
