import { Component, Input } from '@angular/core';
import VehicleType from '../../interfaces/vehicle-type.interface';
@Component({
  selector: 'jrd-vehicle-type',
  templateUrl: './vehicle-type.component.html',
  styleUrls: ['./vehicle-type.component.scss'],
})
export class VehicleTypeComponent {
  @Input() vehicleType?: VehicleType;
}
