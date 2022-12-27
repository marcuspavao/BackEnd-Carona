import { Car } from '../entities/car';

export abstract class CarRepository {
  abstract create(car: Car): Promise<void>;
  abstract findById(riderId: string): Promise<Car | null>;
}
