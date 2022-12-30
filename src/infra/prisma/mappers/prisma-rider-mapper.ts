import { Rider as RawRider } from '@prisma/client';
import { Rider } from '@application/entities/rider';
import { Email } from '@application/entities/email';

export class PrismaRiderMapper {
  static toPrisma(rider: Rider) {
    return {
      id: rider.id,
      name: rider.name,
      cpf: rider.cpf,
      carId: rider.carId,
      email: rider.email.value,
      password: rider.password,
      passwordConfirmation: rider.passwordConfirmation,
      role: rider.role,
    };
  }

  static toDomain(raw: RawRider): Rider {
    return new Rider(
      {
        name: raw.name,
        cpf: raw.cpf,
        carId: raw.carId,
        email: new Email(raw.email),
        password: raw.password,
        passwordConfirmation: raw.passwordConfirmation,
        role: raw.role,
      },
      raw.id,
    );
  }
}
