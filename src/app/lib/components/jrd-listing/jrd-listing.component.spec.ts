import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrdListingComponent } from './jrd-listing.component';

describe('JrdListingComponent', () => {
  let component: JrdListingComponent;
  let fixture: ComponentFixture<JrdListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JrdListingComponent]
    });
    fixture = TestBed.createComponent(JrdListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
