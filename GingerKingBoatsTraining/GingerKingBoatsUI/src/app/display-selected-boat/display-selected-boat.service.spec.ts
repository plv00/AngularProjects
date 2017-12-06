import { TestBed, inject } from '@angular/core/testing';

import { DisplaySelectedBoatService } from './display-selected-boat.service';

describe('DisplaySelectedBoatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplaySelectedBoatService]
    });
  });

  it('should be created', inject([DisplaySelectedBoatService], (service: DisplaySelectedBoatService) => {
    expect(service).toBeTruthy();
  }));
});
