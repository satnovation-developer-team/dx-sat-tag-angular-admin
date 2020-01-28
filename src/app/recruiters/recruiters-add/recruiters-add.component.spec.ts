import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersAddComponent } from './recruiters-add.component';

describe('RecruitersAddComponent', () => {
  let component: RecruitersAddComponent;
  let fixture: ComponentFixture<RecruitersAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
