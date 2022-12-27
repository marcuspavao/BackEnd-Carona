import { Module } from '@nestjs/common';
import { RideRepository } from '@application/repositories/ride-repository';
import { PrismaRideRepository } from '@infra/prisma/repositories/prisma-ride-repository';

import { PrismaService } from './prisma.service';
import { RiderRepository } from '@application/repositories/rider-repository';
import { PrismaRiderRepository } from './repositories/prisma-rider-repository';
import { PrismaCarRepository } from './repositories/prisma-car-repository';
import { CarRepository } from '@application/repositories/car-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: RideRepository,
      useClass: PrismaRideRepository,
    },
    {
      provide: RiderRepository,
      useClass: PrismaRiderRepository,
    },
    {
      provide: CarRepository,
      useClass: PrismaCarRepository,
    },
  ],
  exports: [RideRepository, RiderRepository, CarRepository],
})
export class DatabaseModule {}
