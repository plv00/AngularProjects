import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAllBookingsComponent } from './display-all-bookings.component';

describe('DisplayAllBookingsComponent', () => {
  let component: DisplayAllBookingsComponent;
  let fixture: ComponentFixture<DisplayAllBookingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAllBookingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAllBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
