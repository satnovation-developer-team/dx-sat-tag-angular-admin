import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBoardHomeComponent } from './open-board-home.component';

describe('OpenBoardHomeComponent', () => {
  let component: OpenBoardHomeComponent;
  let fixture: ComponentFixture<OpenBoardHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenBoardHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenBoardHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
