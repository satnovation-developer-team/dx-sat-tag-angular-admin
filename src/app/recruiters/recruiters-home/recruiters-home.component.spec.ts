import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersHomeComponent } from './recruiters-home.component';

describe('RecruitersHomeComponent', () => {
  let component: RecruitersHomeComponent;
  let fixture: ComponentFixture<RecruitersHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecruitersHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecruitersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
