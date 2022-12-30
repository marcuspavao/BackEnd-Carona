import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RiderRepository } from '../../repositories/rider-repository';

interface UpdateCarIdRequest {
  riderId: string;
  id: string;
}

type UpdateCarIdResponse = void;

@Injectable()
export class UpdateCarId {
  constructor(private riderRepository: RiderRepository) {}

  async execute(request: UpdateCarIdRequest): Promise<UpdateCarIdResponse> {
    const { riderId, id } = request;

    const rider = await this.riderRepository.findById(riderId);

    rider.carId = id;
    rider.role = Role['ADMIN'];
    //rider.update(id);

    await this.riderRepository.updateCar(rider);
  }
}
