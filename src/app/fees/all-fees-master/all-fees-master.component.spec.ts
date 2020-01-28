import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFeesMasterComponent } from './all-fees-master.component';

describe('AllFeesMasterComponent', () => {
  let component: AllFeesMasterComponent;
  let fixture: ComponentFixture<AllFeesMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFeesMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFeesMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
