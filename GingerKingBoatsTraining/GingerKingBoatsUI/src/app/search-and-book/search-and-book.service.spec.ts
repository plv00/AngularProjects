import { TestBed, inject } from '@angular/core/testing';

import { SearchAndBookService } from './search-and-book.service';

describe('SearchAndBookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchAndBookService]
    });
  });

  it('should be created', inject([SearchAndBookService], (service: SearchAndBookService) => {
    expect(service).toBeTruthy();
  }));
});
