import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminproducttypesComponent } from './adminproducttypes.component';

describe('AdminproducttypesComponent', () => {
  let component: AdminproducttypesComponent;
  let fixture: ComponentFixture<AdminproducttypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminproducttypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminproducttypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
