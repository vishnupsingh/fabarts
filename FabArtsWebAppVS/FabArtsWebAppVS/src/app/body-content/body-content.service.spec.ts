import { TestBed, inject } from '@angular/core/testing';

import { BodyContentService } from './body-content.service';

describe('BodyContentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BodyContentService]
    });
  });

  it('should be created', inject([BodyContentService], (service: BodyContentService) => {
    expect(service).toBeTruthy();
  }));
});
