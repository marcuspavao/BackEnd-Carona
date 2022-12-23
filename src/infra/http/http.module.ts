import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/prisma/database.module';

import { CraeteRide } from '@application/use-cases/create-ride';
import { RideController } from './controllers/ride.controller';
import { CountRides } from '@application/use-cases/count-riders-rides';
import { GetRiderRides } from '@application/use-cases/get-riders-rides';
import { CancelRide } from '@application/use-cases/cancel-ride';

@Module({
  imports: [DatabaseModule],
  controllers: [RideController],
  providers: [
    CraeteRide,
    CountRides,
    GetRiderRides,
    CancelRide
  ],
})
export class HttpModule {}
