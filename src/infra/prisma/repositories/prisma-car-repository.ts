import { Injectable } from '@nestjs/common';
import { Car } from '@application/entities/Car';
import { CarRepository } from '@application/repositories/Car-repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { PrismaCarMapper } from '@infra/prisma/mappers/prisma-Car-mapper';

@Injectable()
export class PrismaCarRepository implements CarRepository {
  constructor(private prisma: PrismaService) {}

  async findById(riderId: string): Promise<Car | null> {
    const car = await this.prisma.car.findUnique({
      where: {
        riderId: riderId,
      },
    });

    return PrismaCarMapper.toDomain(car);
  }

  async create(car: Car): Promise<void> {
    const raw = PrismaCarMapper.toPrisma(car);

    await this.prisma.car.create({
      data: raw,
    });
  }
}
