import { TestBed } from '@angular/core/testing';

import { CalculatorDaysService } from './calculator-days.service';

describe('CalculatorDaysService', () => {
  let service: CalculatorDaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorDaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
