import { TestBed, inject } from '@angular/core/testing';

import { ServicesOfCurdHttpService } from './services-of-curd-http.service';

describe('ServicesOfCurdHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicesOfCurdHttpService]
    });
  });

  it('should be created', inject([ServicesOfCurdHttpService], (service: ServicesOfCurdHttpService) => {
    expect(service).toBeTruthy();
  }));
});
