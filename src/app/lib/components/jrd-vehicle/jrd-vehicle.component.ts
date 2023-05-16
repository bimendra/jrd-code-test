import { Component, Input } from '@angular/core';
import Vehicle from '../../interfaces/vehicle.interface';

@Component({
  selector: 'jrd-vehicle',
  templateUrl: './jrd-vehicle.component.html',
  styleUrls: ['./jrd-vehicle.component.scss'],
})
export class JrdVehicleComponent {
  @Input() vehicle?: Vehicle;
}
