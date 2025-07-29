import { TestBed } from '@angular/core/testing';

import { NgxLineChartsService } from './ngx-line-charts.service';

describe('NgxLineChartsService', () => {
  let service: NgxLineChartsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxLineChartsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
