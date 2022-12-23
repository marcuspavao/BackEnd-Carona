import { Ride } from '../entities/ride';

export abstract class RideRepository {
  abstract create(ride: Ride): Promise<void>;
  abstract findById(rideId: string): Promise<Ride | null>;
  abstract save(ride: Ride): Promise<void>;
  abstract countManyByRecipientId(rideId: string): Promise<number>;
  abstract findManyByRecipientId(rideId: string): Promise<Ride[]>;
}
