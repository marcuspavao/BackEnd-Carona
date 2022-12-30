import { Rider } from '../entities/rider';

export abstract class RiderRepository {
  abstract create(rider: Rider): Promise<void>;
  abstract updateCar(rider: Rider): Promise<void>;
  abstract findById(riderId: string): Promise<Rider | null>;
  abstract findByEmail(email: string): Promise<Rider | null>;
  abstract findByArg(arg: string): Promise<Rider | null>;
  abstract findAll(): Promise<any>;
}
