import { RideNotFound } from '../errors/ride-not-found';
import { Injectable } from '@nestjs/common';
import { RideRepository } from '../../repositories/ride-repository';
import { badRequest } from '@helpers/http-helper';

interface CancelRideRequest {
  rideId: string;
}

type CancelRideResponse = any;

@Injectable()
export class CancelRide {
  constructor(private rideRepository: RideRepository) {}

  async execute(request: CancelRideRequest): Promise<CancelRideResponse> {
    const { rideId } = request;

    const ride = await this.rideRepository.findById(rideId);

    if (!ride) {
      return badRequest(new RideNotFound());
    }

    ride.cancel();

    await this.rideRepository.save(ride);
  }
}
