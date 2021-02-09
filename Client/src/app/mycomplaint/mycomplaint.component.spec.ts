import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComplaintComponent } from './mycomplaint.component';

describe('MycomplaintComponent', () => {
  let component: MyComplaintComponent;
  let fixture: ComponentFixture<MyComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
