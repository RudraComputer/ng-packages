import { TestBed } from '@angular/core/testing';

import { NgEnquiryService } from './ng-enquiry.service';

describe('NgEnquiryService', () => {
  let service: NgEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
