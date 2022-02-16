import { TestBed } from '@angular/core/testing';

import { LibDesignTestService } from './lib-design-test.service';

describe('LibDesignTestService', () => {
  let service: LibDesignTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibDesignTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
