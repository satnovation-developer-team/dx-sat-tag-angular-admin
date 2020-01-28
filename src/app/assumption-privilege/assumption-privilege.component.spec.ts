import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssumptionPrivilegeComponent } from './assumption-privilege.component';

describe('AssumptionPrivilegeComponent', () => {
  let component: AssumptionPrivilegeComponent;
  let fixture: ComponentFixture<AssumptionPrivilegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssumptionPrivilegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssumptionPrivilegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
