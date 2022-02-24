import { TestBed } from '@angular/core/testing';

import { CalcEngineService } from './calc-engine.service';

describe('CalcEngineService', () => {
  let service: CalcEngineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcEngineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
