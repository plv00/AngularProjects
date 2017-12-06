import { TestBed, inject } from '@angular/core/testing';

import { ListOfBoatsService } from './list-of-boats.service';

describe('ListOfBoatsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListOfBoatsService]
    });
  });

  it('should be created', inject([ListOfBoatsService], (service: ListOfBoatsService) => {
    expect(service).toBeTruthy();
  }));
});
