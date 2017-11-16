import { TestBed, inject } from '@angular/core/testing';

import { SocialBlogFooterService } from './social-blog-footer.service';

describe('SocialBlogFooterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialBlogFooterService]
    });
  });

  it('should be created', inject([SocialBlogFooterService], (service: SocialBlogFooterService) => {
    expect(service).toBeTruthy();
  }));
});
