import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTopicBlogsComponent } from './admintopicblog.component';

describe('AdminTopicBlogsComponent', () => {
  let component: AdminTopicBlogsComponent;
  let fixture: ComponentFixture<AdminTopicBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTopicBlogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTopicBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
