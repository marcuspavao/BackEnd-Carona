import { Rider } from '../../entities/rider';
import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../../repositories/rider-repository';

type GetAllRequest = void;

interface GetAllResponse {
  riders: [];
}

@Injectable()
export class GetAllRider {
  constructor(private riderRepository: RiderRepository) {}

  async execute(): Promise<GetAllResponse> {
    const riders = await this.riderRepository.findAll();

    return {
      riders,
    };
  }
}
