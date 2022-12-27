import { Car as RawCar } from '@prisma/client';
import { Car } from '@application/entities/car';

export class PrismaCarMapper {
  static toPrisma(car: Car) {
    return {
      id: car.id,
      model: car.model,
      modelYear: car.modelYear,
      plate: car.plate,
      riderId: car.riderId,
    };
  }

  static toDomain(raw: RawCar): Car {
    return new Car(
      {
        model: raw.model,
        modelYear: raw.modelYear,
        plate: raw.plate,
        riderId: raw.riderId,
      },
      raw.id,
    );
  }
}
