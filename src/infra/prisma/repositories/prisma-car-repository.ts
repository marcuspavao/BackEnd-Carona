import { Injectable } from '@nestjs/common';
import { Car } from '@application/entities/car';
import { CarRepository } from '@application/repositories/car-repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { PrismaCarMapper } from '@infra/prisma/mappers/prisma-car-mapper';

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
