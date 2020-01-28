import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecializationSingleAddComponent } from './specialization-single-add.component';

describe('SpecializationSingleAddComponent', () => {
  let component: SpecializationSingleAddComponent;
  let fixture: ComponentFixture<SpecializationSingleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecializationSingleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecializationSingleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
