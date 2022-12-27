import { Rider } from '@application/entities/rider';

export class RiderViewModel {
  static toHTTP(rider: Rider) {
    return {
      id: rider.id,
      name: rider.name,
      cpf: rider.cpf,
      carId: rider.carId,
      car: rider.car,
    };
  }
}
