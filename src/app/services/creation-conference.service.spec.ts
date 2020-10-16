import { TestBed } from '@angular/core/testing';

import { CreationConferenceService } from './creation-conference.service';

describe('CreationConferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreationConferenceService = TestBed.get(CreationConferenceService);
    expect(service).toBeTruthy();
  });
});
