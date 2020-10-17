import { TestBed } from '@angular/core/testing';

import { ConferenceEnCourService } from './conference-en-cour.service';

describe('ConferenceEnCourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConferenceEnCourService = TestBed.get(ConferenceEnCourService);
    expect(service).toBeTruthy();
  });
});
