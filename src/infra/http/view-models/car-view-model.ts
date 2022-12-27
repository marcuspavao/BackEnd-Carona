import { Car } from '@application/entities/car';

export class CarViewModel {
  static toHTTP(car: Car) {
    return {
      id: car.id,
      model: car.model,
      modelYear: car.modelYear,
      plate: car.plate,
      riderId: car.riderId,
    };
  }
}
