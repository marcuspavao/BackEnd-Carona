import { Injectable } from '@nestjs/common';
import { Rider } from '@application/entities/rider';
import { RiderRepository } from '@application/repositories/rider-repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { PrismaRiderMapper } from '@infra/prisma/mappers/prisma-rider-mapper';

@Injectable()
export class PrismaRiderRepository implements RiderRepository {
  constructor(private prisma: PrismaService) {}

  async findById(riderId: string): Promise<any | null> {
    const rider = await this.prisma.rider.findUnique({
      where: {
        id: riderId,
      },
      include: {
        car: true,
      },
    });

    if (!rider) {
      return null;
    }

    return rider;
  }

  async create(rider: Rider): Promise<void> {
    const raw = PrismaRiderMapper.toPrisma(rider);

    await this.prisma.rider.create({
      data: raw,
    });
  }

  async updateCar(rider: Rider): Promise<void> {
    const raw = PrismaRiderMapper.toPrisma(rider);

    await this.prisma.rider.update({
      where: {
        id: raw.id,
      },
      data: {
        carId: raw.carId,
      },
    });
  }
}
