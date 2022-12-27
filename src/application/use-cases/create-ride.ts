import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride-repository';
import { Ride } from '../entities/ride';

interface CreateRideRequest {
  riderId: string;
  info: string;
  departureLocal: string;
  arrivalLocal: string;
  arrivingDate: string;
  departureDate: string;
}

interface CreateRideResponse {
  ride: Ride;
}

@Injectable()
export class CreateRide {
  constructor(private notificationsRepository: RideRepository) {}

  async execute(request: CreateRideRequest): Promise<CreateRideResponse> {
    const {
      arrivalLocal,
      arrivingDate,
      departureDate,
      departureLocal,
      info,
      riderId,
    } = request;

    const ride = new Ride({
      arrivalLocal,
      arrivingDate,
      departureDate,
      departureLocal,
      info,
      riderId,
    });

    await this.notificationsRepository.create(ride);

    return {
      ride,
    };
  }
}
