import { Component } from '@angular/core';
import Vehicle from './lib/interfaces/vehicle.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  vehicle: Vehicle = {
    name: 'Hatchback',
    maxPassengers: 2,
    thumbnailUrl:
      'https://res.jayride.com/web/dotcom/vehicle/370x300/car-economy-sedan.png',
  };
}
