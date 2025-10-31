import { TestBed } from '@angular/core/testing';

import { CseapiserviceService } from './cseapiservice.service';

describe('CseapiserviceService', () => {
  let service: CseapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CseapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
