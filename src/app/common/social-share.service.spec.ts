import { TestBed, inject } from '@angular/core/testing';

import { SocialShareService } from './social-share.service';

describe('SocialShareService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialShareService]
    });
  });

  it('should be created', inject([SocialShareService], (service: SocialShareService) => {
    expect(service).toBeTruthy();
  }));
});
