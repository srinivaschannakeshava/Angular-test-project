import { TestBed } from '@angular/core/testing';

import { MovierouteactivatorService } from './movierouteactivator.service';

describe('MovierouteactivatorService', () => {
  let service: MovierouteactivatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovierouteactivatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
