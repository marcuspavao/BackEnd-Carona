import { RideNotFound } from '@application/use-cases/errors/ride-not-found';
import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride-repository';

interface CancelRideRequest {
  rideId: string;
}

type CancelRideResponse = void;

@Injectable()
export class CancelRide {
  constructor(private notificationsRepository: RideRepository) {}

  async execute(
    request: CancelRideRequest,
  ): Promise<CancelRideResponse> {
    const { rideId } = request;

    const ride = await this.notificationsRepository.findById(
      rideId,
    );

    if (!ride) {
      throw new RideNotFound();
    }

    ride.cancel();

    await this.notificationsRepository.save(ride);
  }
}
