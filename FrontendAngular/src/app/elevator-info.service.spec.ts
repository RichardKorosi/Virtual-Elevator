import { TestBed } from '@angular/core/testing';

import { ElevatorInfoService } from './elevator-info.service';

describe('ElevatorInfoService', () => {
  let service: ElevatorInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElevatorInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
