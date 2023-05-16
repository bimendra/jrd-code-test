import { Component, Input } from '@angular/core';
import VehicleType from '../../interfaces/vehicle-type.interface';

@Component({
  selector: 'jrd-vehicle-type',
  templateUrl: './jrd-vehicle-type.component.html',
  styleUrls: ['./jrd-vehicle-type.component.scss'],
})
export class JrdVehicleTypeComponent {
  @Input() vehicleType?: VehicleType;
}
