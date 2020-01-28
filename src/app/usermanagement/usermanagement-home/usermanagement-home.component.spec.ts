import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementHomeComponent } from './usermanagement-home.component';

describe('UsermanagementHomeComponent', () => {
  let component: UsermanagementHomeComponent;
  let fixture: ComponentFixture<UsermanagementHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
