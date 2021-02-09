import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcomplaintComponent } from './editcomplaint.component';

describe('EditcomplaintComponent', () => {
  let component: EditcomplaintComponent;
  let fixture: ComponentFixture<EditcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcomplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
