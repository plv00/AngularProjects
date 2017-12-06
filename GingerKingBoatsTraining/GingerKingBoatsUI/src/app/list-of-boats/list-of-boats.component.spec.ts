import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBoatsComponent } from './list-of-boats.component';

describe('ListOfBoatsComponent', () => {
  let component: ListOfBoatsComponent;
  let fixture: ComponentFixture<ListOfBoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfBoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfBoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
