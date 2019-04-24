import { TestBed } from '@angular/core/testing';

import { AuthGuard2Service } from './auth-guard2.service';

describe('AuthGuard2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthGuard2Service = TestBed.get(AuthGuard2Service);
    expect(service).toBeTruthy();
  });
});
