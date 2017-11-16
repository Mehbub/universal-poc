import { TestBed, inject } from '@angular/core/testing';

import { LiveFeedService } from './live-feed.service';

describe('LiveFeedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LiveFeedService]
    });
  });

  it('should be created', inject([LiveFeedService], (service: LiveFeedService) => {
    expect(service).toBeTruthy();
  }));
});
