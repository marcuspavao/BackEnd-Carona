import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/prisma/database.module';

import {
  CreateRide,
  CountRides,
  GetRiderRides,
  CancelRide,
  CreateCar,
  CreateRider,
  GetInfoRider,
  UpdateCarId,
} from '@application/use-cases/';
import { RideController } from './controllers/ride.controller';
import { RiderController } from './controllers/rider.controller';
import { CarController } from './controllers/car.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [RideController, RiderController, CarController],
  providers: [
    CreateRide,
    CountRides,
    GetRiderRides,
    CancelRide,
    CreateRider,
    CreateCar,
    UpdateCarId,
    GetInfoRider,
  ],
})
export class HttpModule {}
