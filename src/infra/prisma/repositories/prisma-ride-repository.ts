import { Injectable } from '@nestjs/common';
import { Ride } from '@application/entities/ride';
import { RideRepository } from '@application/repositories/ride-repository';
import { PrismaService } from '../prisma.service';
import { PrismaRideMapper } from '@infra/prisma/mappers/prisma-ride-mapper';

@Injectable()
export class PrismaRideRepository implements RideRepository {
  constructor(private prisma: PrismaService) {}

  async findById(rideId: string): Promise<Ride | null> {
    const ride = await this.prisma.ride.findUnique({
      where: {
        id: rideId,
      },
    });

    if (!ride) {
      return null;
    }

    return PrismaRideMapper.toDomain(ride);
  }

  async findManyByRecipientId(riderId: string): Promise<Ride[]> {
    const notifications = await this.prisma.ride.findMany({
      where: {
        riderId,
      },
    });

    return notifications.map(PrismaRideMapper.toDomain);
  }

  async countManyByRecipientId(riderId: string): Promise<number> {
    const count = await this.prisma.ride.count({
      where: {
        riderId,
      },
    });

    return count;
  }

  async create(ride: Ride): Promise<void> {
    const raw = PrismaRideMapper.toPrisma(ride);

    await this.prisma.ride.create({
      data: raw,
    });
  }

  async save(ride: Ride): Promise<void> {
    const raw = PrismaRideMapper.toPrisma(ride);

    await this.prisma.ride.update({
      where: {
        id: raw.id,
      },
      data: raw,
    });
  }
}
