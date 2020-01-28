import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationSingleHomeComponent } from './specialization-single-home.component';

describe('SpecializationSingleHomeComponent', () => {
  let component: SpecializationSingleHomeComponent;
  let fixture: ComponentFixture<SpecializationSingleHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationSingleHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationSingleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
