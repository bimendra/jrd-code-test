import { Component } from '@angular/core';
import VehicleType from './lib/interfaces/vehicle-type.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicleType: VehicleType = {
    name: 'Hatchback',
    maxPassengers: 2,
  };
}
