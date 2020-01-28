import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilatiesAddComponent } from './facilaties-add.component';

describe('FacilatiesAddComponent', () => {
  let component: FacilatiesAddComponent;
  let fixture: ComponentFixture<FacilatiesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilatiesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilatiesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
