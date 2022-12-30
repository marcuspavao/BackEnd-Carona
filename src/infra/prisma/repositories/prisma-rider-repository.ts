import { Injectable } from '@nestjs/common';
import { Rider } from '@application/entities/rider';
import { RiderRepository } from '@application/repositories/rider-repository';
import { PrismaService } from '@infra/prisma/prisma.service';
import { PrismaRiderMapper } from '@infra/prisma/mappers/prisma-rider-mapper';

export interface updateParams {
  where?: any;
  data?: any;
}

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

  async findByArg(req: any): Promise<any | null> {
    const { ...body } = req;
    const props = ['riderId', 'cpf', 'email']; //Ordem de prioridade
    let objQuery: any;
    let a;
    props.map((element) => {
      if (body.hasOwnProperty(element)) {
        if (body['riderId']) {
          const query = `{"id": "${body[`${element}`]}"}`;
          //console.log(JSON.parse(query));
          a = JSON.parse(query);
          objQuery = this.getObjQuery(a);
        } else {
          const query = `{"${element}": "${body[`${element}`]}"}`;
          //console.log(JSON.parse(query));
          a = JSON.parse(query);
          objQuery = this.getObjQuery(a);
        }
        //objQuery.where.email = `${body[`${element}`]}`;
      }
    });
    console.log(objQuery);
    const rider = await this.prisma.rider.findFirst(objQuery);

    if (!rider) {
      return null;
    }
    return PrismaRiderMapper.toDomain(rider);
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

  async updateArg(req: any): Promise<void> {
    //const { ...body } = req;
    const raw = PrismaRiderMapper.toPrisma(req);
    console.log(raw);
    //console.log(body);
    //console.log(raw);
    await this.prisma.rider.update({ where: { id: raw.id }, data: raw });
  }

  /*   async updateArg(req: any): Promise<void> {
    const { ...body } = req;
    const raw = PrismaRiderMapper.toPrisma(body);
    console.log(raw);
    const where = JSON.parse(`{"id": "${raw['id']}"}`);
    //const raw = PrismaRiderMapper.toPrisma(rider);
    const props = ['role', 'carId', 'email', 'name', 'cpf'];
    let query = '';
    props.map((element) => {
      if (raw[`${element}`]) {
        query += `"${element}": "${raw[`${element}`]}",`;
      }
    });
    const data = this.getFormatedJSON(query);
    const objQuery = this.getObjQuery(where, data);
    await this.prisma.rider.update(objQuery);
  } */

  getFormatedJSON = (string: string): JSON | null => {
    string = string.substring(0, string.length - 1);
    const data = JSON.parse(`{${string}}`);
    return data;
  };

  getObjQuery = (prop?: any, update?: any | null): any => {
    if (!update) {
      return {
        where: prop,
      };
    }
    return {
      where: prop,
      data: update,
    };
  };
}
