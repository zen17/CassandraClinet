import { TestBed } from '@angular/core/testing';

import { NeoService } from './neo.service';

describe('NeoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NeoService = TestBed.get(NeoService);
    expect(service).toBeTruthy();
  });
});
