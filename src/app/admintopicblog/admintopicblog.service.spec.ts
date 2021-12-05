import { TestBed } from '@angular/core/testing';

import { TopicBlogsService } from './admintopicblog.service';

describe('TopicBlogsService', () => {
  let service: TopicBlogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicBlogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
