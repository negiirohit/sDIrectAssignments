import { TestBed } from '@angular/core/testing';

import { LawnService } from './lawn.service';

describe('LawnService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LawnService = TestBed.get(LawnService);
    expect(service).toBeTruthy();
  });
});
