import { TestBed, inject } from '@angular/core/testing';

import { SocialFooterService } from './social-footer.service';

describe('SocialFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialFooterService]
    });
  });

  it('should be created', inject([SocialFooterService], (service: SocialFooterService) => {
    expect(service).toBeTruthy();
  }));
});
