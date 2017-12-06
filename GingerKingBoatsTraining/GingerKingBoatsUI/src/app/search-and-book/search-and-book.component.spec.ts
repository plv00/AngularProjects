import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAndBookComponent } from './search-and-book.component';

describe('SearchAndBookComponent', () => {
  let component: SearchAndBookComponent;
  let fixture: ComponentFixture<SearchAndBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAndBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAndBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
