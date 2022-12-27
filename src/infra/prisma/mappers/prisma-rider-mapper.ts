import { Rider as RawRider } from '@prisma/client';
import { Rider } from '@application/entities/rider';

export class PrismaRiderMapper {
  static toPrisma(rider: Rider) {
    return {
      id: rider.id,
      name: rider.name,
      cpf: rider.cpf,
      carId: rider.carId,
    };
  }

  static toDomain(raw: RawRider): Rider {
    return new Rider(
      {
        name: raw.name,
        cpf: raw.cpf,
        carId: raw.carId,
      },
      raw.id,
    );
  }
}
