import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCursosComponent } from './admin-cursos.component';

describe('AdminCursosComponent', () => {
  let component: AdminCursosComponent;
  let fixture: ComponentFixture<AdminCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
