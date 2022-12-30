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
  GetAllRider,
} from '@application/use-cases/';
import { RideController } from './controllers/ride.controller';
import { RiderController } from './controllers/rider.controller';
import { CarController } from './controllers/car.controller';
import { RolesGuard } from 'src/common/guards/roles.guard';
import { APP_GUARD } from '@nestjs/core/constants';
import { JwtService } from '@nestjs/jwt';
import { UpdateArg } from '@application/use-cases/rider/update-arg';

@Module({
  imports: [DatabaseModule],
  controllers: [RideController, RiderController, CarController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    /*     {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    }, */
    GetAllRider,
    UpdateArg,
    CreateRide,
    CountRides,
    GetRiderRides,
    CancelRide,
    CreateRider,
    CreateCar,
    UpdateCarId,
    GetInfoRider,
    JwtService,
  ],
})
export class HttpModule {}
