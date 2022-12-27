import { Rider } from '../../entities/rider';
import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../../repositories/rider-repository';

interface GetInfoRequest {
  riderId: any;
}

interface GetInfoResponse {
  rider: Rider;
}

@Injectable()
export class GetInfoRider {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: GetInfoRequest): Promise<GetInfoResponse> {
    const { riderId } = request;
    if (!riderId.id) {
      const rider = await this.riderRepository.findById(riderId);

      return {
        rider,
      };
    }

    const rider = await this.riderRepository.findById(riderId.id);

    return {
      rider,
    };
  }
}
