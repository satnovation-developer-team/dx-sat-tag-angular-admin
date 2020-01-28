import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamHomeComponent } from './stream-home.component';

describe('StreamHomeComponent', () => {
  let component: StreamHomeComponent;
  let fixture: ComponentFixture<StreamHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
