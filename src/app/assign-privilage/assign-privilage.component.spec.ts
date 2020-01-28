import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPrivilageComponent } from './assign-privilage.component';

describe('AssignPrivilageComponent', () => {
  let component: AssignPrivilageComponent;
  let fixture: ComponentFixture<AssignPrivilageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPrivilageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPrivilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
