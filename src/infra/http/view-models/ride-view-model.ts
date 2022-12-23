import { Ride } from '@application/entities/ride';

export class RideViewModel {
  static toHTTP(ride: Ride) {
    return {
      id: ride.id,
      riderId: ride.riderId,
      info: ride.info,
      arrivalLocal: ride.arrivalLocal,
      arrivingDate: ride.arrivingDate,
      departureDate: ride.departureDate,
      departureLocal: ride.departureLocal,
      canceledAt: ride.canceledAt,
      createdAt: ride.createdAt,
    };
  }
}
