import { Injectable } from '@nestjs/common';
import { RiderRepository } from '../../repositories/rider-repository';
import { Rider } from '../../entities/rider';
import { Email } from '@application/entities/email';

interface CreateRiderRequest {
  name: string;
  cpf: string;
  carId: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

interface CreateRiderResponse {
  rider: Rider;
}

@Injectable()
export class CreateRider {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: CreateRiderRequest): Promise<CreateRiderResponse> {
    const { carId, cpf, name, email, password, passwordConfirmation } = request;

    const rider = new Rider({
      carId,
      cpf,
      name,
      email: new Email(email),
      password,
      passwordConfirmation,
    });

    rider.password = password;

    await this.riderRepository.create(rider);

    return {
      rider,
    };
  }
}
