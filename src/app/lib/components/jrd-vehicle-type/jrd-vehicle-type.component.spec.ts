import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JrdVehicleComponent } from './jrd-vehicle.component';

describe('JrdVehicleComponent', () => {
  let component: JrdVehicleComponent;
  let fixture: ComponentFixture<JrdVehicleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JrdVehicleComponent]
    });
    fixture = TestBed.createComponent(JrdVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
