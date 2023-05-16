import VehicleType from './vehicle-type.interface';

export default interface Listing {
  name: string;
  pricePerPassenger: number;
  vehicleType: VehicleType;
}
