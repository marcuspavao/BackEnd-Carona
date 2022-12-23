import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride-repository';

interface CountRidesRequest {
  riderId: string;
}

interface CountRidesResponse {
  count: number;
}

@Injectable()
export class CountRides {
  constructor(private rideRepository: RideRepository) {}

  async execute(
    request: CountRidesRequest,
  ): Promise<CountRidesResponse> {
    const { riderId } = request;

    const count = await this.rideRepository.countManyByRecipientId(
      riderId,
    );

    return {
      count,
    };
  }
}
