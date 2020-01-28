import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagementEditComponent } from './usermanagement-edit.component';

describe('UsermanagementEditComponent', () => {
  let component: UsermanagementEditComponent;
  let fixture: ComponentFixture<UsermanagementEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsermanagementEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermanagementEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
