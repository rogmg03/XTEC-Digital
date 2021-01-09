import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCreatesemesterComponent } from './admin-createsemester.component';

describe('AdminCreatesemesterComponent', () => {
  let component: AdminCreatesemesterComponent;
  let fixture: ComponentFixture<AdminCreatesemesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCreatesemesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCreatesemesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
