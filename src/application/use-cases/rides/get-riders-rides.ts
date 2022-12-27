import { Ride } from '../../entities/ride';
import { Injectable } from '@nestjs/common';
import { RideRepository } from '../../repositories/ride-repository';

interface GetRidersRequest {
  riderId: string;
}

interface GetRidersResponse {
  rides: Ride[];
}

@Injectable()
export class GetRiderRides {
  constructor(private ridesRepository: RideRepository) {}

  async execute(request: GetRidersRequest): Promise<GetRidersResponse> {
    const { riderId } = request;

    const rides = await this.ridesRepository.findManyByRidersId(riderId);

    return {
      rides,
    };
  }
}
