import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagmentHomeComponent } from './usermanagment-home.component';

describe('UsermanagmentHomeComponent', () => {
  let component: UsermanagmentHomeComponent;
  let fixture: ComponentFixture<UsermanagmentHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagmentHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagmentHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
