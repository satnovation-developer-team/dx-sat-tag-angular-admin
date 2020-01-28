import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TalkToCounsellerHomeComponent } from './talk-to-counseller-home.component';

describe('TalkToCounsellerHomeComponent', () => {
  let component: TalkToCounsellerHomeComponent;
  let fixture: ComponentFixture<TalkToCounsellerHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TalkToCounsellerHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TalkToCounsellerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
