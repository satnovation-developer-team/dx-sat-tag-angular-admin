import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilatiesHomeComponent } from './facilaties-home.component';

describe('FacilatiesHomeComponent', () => {
  let component: FacilatiesHomeComponent;
  let fixture: ComponentFixture<FacilatiesHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilatiesHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilatiesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
