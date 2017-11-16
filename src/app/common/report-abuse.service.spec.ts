import { TestBed, inject } from '@angular/core/testing';

import { ReportAbuseService } from './report-abuse.service';

describe('ReportAbuseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportAbuseService]
    });
  });

  it('should be created', inject([ReportAbuseService], (service: ReportAbuseService) => {
    expect(service).toBeTruthy();
  }));
});
