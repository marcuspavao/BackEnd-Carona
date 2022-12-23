import { Ride } from '../entities/ride';
import { Injectable } from '@nestjs/common';
import { RideRepository } from '../repositories/ride-repository';

interface GetRidersRequest {
  riderId: string;
}

interface GetRidersResponse {
  rides: Ride[];
}

@Injectable()
export class GetRiderRides {
  constructor(private notificationsRepository: RideRepository) {}

  async execute(
    request: GetRidersRequest,
  ): Promise<GetRidersResponse> {
    const { riderId } = request;

    const rides = await this.notificationsRepository.findManyByRecipientId(riderId);

    return {
      rides,
    };
  }
}
