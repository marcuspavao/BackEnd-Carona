import { Injectable } from '@nestjs/common';
import { Rider } from '@application/entities/rider';
import { RiderRepository } from '@application/repositories/rider-repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { PrismaRiderMapper } from '@infra/prisma/mappers/prisma-rider-mapper';

@Injectable()
export class PrismaRiderRepository implements RiderRepository {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<any | null> {
    const riders = await this.prisma.rider.findMany();

    if (!riders) {
      return null;
    }

    return riders;
  }
  async findByEmail(email: any): Promise<any | null> {
    const rider = await this.prisma.rider.findFirst({
      where: {
        email: email,
      },
    });

    if (!rider) {
      return null;
    }

    return rider;
  }

  getObjQuery = (prop: any) => {
    return { where: { prop } };
  };

  async findByArg(req: any): Promise<any | null> {
    const { ...body } = req;
    const props = ['email', 'riderId'];
    let objQuery;
    props.map((element) => {
      console.log(body.hasOwnProperty(element));
      objQuery = this.getObjQuery(body.element);
    });
    console.log(JSON.stringify(objQuery));
    const rider = await this.prisma.rider.findFirst(objQuery);

    if (!rider) {
      return null;
    }

    return rider;
  }

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
        role: raw.role,
      },
    });
  }

  async updateRole(rider: Rider): Promise<void> {
    const raw = PrismaRiderMapper.toPrisma(rider);

    await this.prisma.rider.update({
      where: {
        id: raw.id,
      },
      data: {
        role: raw.role,
      },
    });
  }
}
