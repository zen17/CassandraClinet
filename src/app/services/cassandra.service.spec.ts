import { TestBed } from '@angular/core/testing';

import { CassandraService } from './cassandra.service';

describe('CassandraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CassandraService = TestBed.get(CassandraService);
    expect(service).toBeTruthy();
  });
});
