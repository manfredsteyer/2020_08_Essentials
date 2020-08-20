import { TestBed } from '@angular/core/testing';

import { LoggerLibService } from './logger-lib.service';

describe('LoggerLibService', () => {
  let service: LoggerLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
