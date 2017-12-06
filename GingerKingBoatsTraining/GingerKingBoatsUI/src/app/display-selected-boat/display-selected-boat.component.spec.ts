import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectedBoatComponent } from './display-selected-boat.component';

describe('DisplaySelectedBoatComponent', () => {
  let component: DisplaySelectedBoatComponent;
  let fixture: ComponentFixture<DisplaySelectedBoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySelectedBoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySelectedBoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
