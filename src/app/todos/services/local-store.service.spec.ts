import { TestBed } from '@angular/core/testing';

import { LocalStoreService } from './local-store.service';

describe('LocalStoreService', () => {

  const storage = {};

  beforeEach(() => TestBed.configureTestingModule({
    providers: [{ provide: Storage, useValue: storage }]
  }));

  it('should be created', () => {
    const service: LocalStoreService = TestBed.get(LocalStoreService);
    expect(service).toBeTruthy();
  });
});
