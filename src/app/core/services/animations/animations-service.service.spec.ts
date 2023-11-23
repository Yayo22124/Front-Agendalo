import { TestBed } from '@angular/core/testing';

import { AnimationsServiceService } from './animations-service.service';

describe('AnimationsServiceService', () => {
  let service: AnimationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
