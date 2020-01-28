import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToExpertHomeComponent } from './talk-to-expert-home.component';

describe('TalkToExpertHomeComponent', () => {
  let component: TalkToExpertHomeComponent;
  let fixture: ComponentFixture<TalkToExpertHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkToExpertHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkToExpertHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
