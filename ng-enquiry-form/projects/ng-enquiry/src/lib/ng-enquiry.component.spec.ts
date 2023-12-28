import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgEnquiryComponent } from './ng-enquiry.component';

describe('NgEnquiryComponent', () => {
  let component: NgEnquiryComponent;
  let fixture: ComponentFixture<NgEnquiryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgEnquiryComponent]
    });
    fixture = TestBed.createComponent(NgEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
