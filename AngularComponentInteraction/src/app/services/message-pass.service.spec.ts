import { TestBed } from '@angular/core/testing';

import { MessagePassService } from './message-pass.service';

describe('MessagePassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessagePassService = TestBed.get(MessagePassService);
    expect(service).toBeTruthy();
  });
});
