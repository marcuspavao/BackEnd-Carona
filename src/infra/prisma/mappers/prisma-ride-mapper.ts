import { Ride as RawRide } from '@prisma/client';
import { Ride } from '@application/entities/ride';

export class PrismaRideMapper {
  static toPrisma(ride: Ride) {
    return {
      id: ride.id,
      riderId: ride.riderId,
      info: ride.info,
      isFull: ride.isFull,
      arrivalLocal: ride.arrivalLocal,
      arrivingDate: new Date(ride.arrivingDate),
      departureDate: new Date(ride.departureDate),
      departureLocal: ride.departureLocal,
      canceledAt: ride.canceledAt,
      createdAt: ride.createdAt,
    };
  }

  static toDomain(raw: RawRide): Ride {
    return new Ride(
      {
        riderId: raw.riderId,
        info: raw.info,
        isFull: raw.isFull,
        arrivalLocal: raw.arrivalLocal,
        arrivingDate: String(raw.arrivingDate),
        departureDate: String(raw.departureDate),
        departureLocal: raw.departureLocal,
        canceledAt: raw.canceledAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
