import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../../repositories/rider-repository';
import { Rider } from '../../entities/rider';

interface CreateRiderRequest {
  name: string;
  cpf: string;
  carId: string;
}

interface CreateRiderResponse {
  rider: Rider;
}

@Injectable()
export class CreateRider {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: CreateRiderRequest): Promise<CreateRiderResponse> {
    const { carId, cpf, name } = request;

    const rider = new Rider({
      carId,
      cpf,
      name,
    });

    await this.riderRepository.create(rider);

    return {
      rider,
    };
  }
}
