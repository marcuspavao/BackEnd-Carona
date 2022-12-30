import { Email } from '@application/entities/email';
import { PrismaRiderMapper } from '@infra/prisma/mappers/prisma-rider-mapper';
import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RiderRepository } from '../../repositories/rider-repository';

type UpdateCarIdRequest = any;

type UpdateCarIdResponse = void;

@Injectable()
export class UpdateArg {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: UpdateCarIdRequest): Promise<UpdateCarIdResponse> {
    const { ...body } = request;

    const rider = await this.riderRepository.findByArg(body);

    console.log(rider.email.getemail);

    rider.carId = body['carId'];
    rider.cpf = body['cpf'];
    rider.name = body['name'];
    //rider.email = new Email(body['email']);
    rider.email = new Email(body['email']);
    rider.carId = body['carId'];
    if (rider.role == 'ADMIN') {
      rider.role = Role['USER'];
    } else {
      rider.role = Role['ADMIN'];
    }
    //rider.update(id);

    await this.riderRepository.updateArg(rider);
  }
}
