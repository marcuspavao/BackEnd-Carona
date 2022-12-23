import { Ride } from '@application/entities/ride';
import { RideRepository } from '@application/repositories/ride-repository';

export class InMemoryRideRepository implements RideRepository {
  public rides: Ride[] = [];

  async findById(rideId: string): Promise<Ride | null> {
    const ride = this.rides.find((item) => item.id === rideId);

    if (!ride) {
      return null;
    }

    return ride;
  }

  async findManyByRidersId(riderId: string): Promise<Ride[]> {
    return this.rides.filter((item) => item.riderId === riderId);
  }

  async countManyByRidersId(riderId: string): Promise<number> {
    return this.rides.filter((item) => item.riderId === riderId).length;
  }

  async create(ride: Ride) {
    this.rides.push(ride);
  }

  async save(ride: Ride): Promise<void> {
    const rideIndex = this.rides.findIndex((item) => item.id === ride.id);

    if (rideIndex >= 0) {
      this.rides[rideIndex] = ride;
    }
  }
}
