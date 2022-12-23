import { Module } from '@nestjs/common';
import { RideRepository } from '@application/repositories/ride-repository';
import { PrismaRideRepository } from '@infra/prisma/repositories/prisma-ride-repository';

import { PrismaService } from './prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: RideRepository,
      useClass: PrismaRideRepository,
    },
  ],
  exports: [RideRepository],
})
export class DatabaseModule {}
