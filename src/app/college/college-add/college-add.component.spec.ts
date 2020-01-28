import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeAddComponent } from './college-add.component';

describe('CollegeAddComponent', () => {
  let component: CollegeAddComponent;
  let fixture: ComponentFixture<CollegeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
