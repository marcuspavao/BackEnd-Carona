import { Rider } from '../../entities/rider';
import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../../repositories/rider-repository';

type GetInfoRequest = any;

type GetInfoResponse = any;

@Injectable()
export class GetInfoRider {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: GetInfoRequest): Promise<GetInfoResponse> {
    const { ...body } = request;

    //console.log(body);
    const rider = await this.riderRepository.findByArg(body);

    return {
      rider,
    };
  }
}

/* async execute(request: GetInfoRequest): Promise<GetInfoResponse> {
  const { ...body } = request;
  const props = ['email', 'riderId'];
  props.map((element) => {
    console.log(body.hasOwnProperty(element));
  });
  console.log(body);
  const rider = await this.riderRepository.findById(body.riderId);

  return {
    rider,
  };
} */
