import { TestBed } from '@angular/core/testing';

import { StateService } from './state.service';

describe('StateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be creatable by DI', () => {
    const service: StateService = TestBed.get(StateService);
    expect(service).toBeTruthy();
  });

  describe('API', () => {

    let service: StateService;

    beforeEach(() => {
      service = TestBed.get(StateService);
    });

    it('should have todos porperty', () => {
      expect(service.todos).toBeDefined();
    });
  });
});
