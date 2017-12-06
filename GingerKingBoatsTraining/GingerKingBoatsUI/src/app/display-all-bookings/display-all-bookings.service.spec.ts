import { TestBed, inject } from '@angular/core/testing';

import { DisplayAllBookingsService } from './display-all-bookings.service';

describe('DisplayAllBookingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DisplayAllBookingsService]
    });
  });

  it('should be created', inject([DisplayAllBookingsService], (service: DisplayAllBookingsService) => {
    expect(service).toBeTruthy();
  }));
});
