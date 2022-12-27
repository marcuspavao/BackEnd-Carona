import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/prisma/database.module';

import { CreateRide } from '@application/use-cases/create-ride';
import { RideController } from './controllers/ride.controller';
import { CountRides } from '@application/use-cases/count-riders-rides';
import { GetRiderRides } from '@application/use-cases/get-riders-rides';
import { CancelRide } from '@application/use-cases/cancel-ride';
import { CreateRider } from '@application/use-cases/create-rider';
import { RiderController } from './controllers/rider.controller';
import { CarController } from './controllers/car.controller';
import { CreateCar } from '@application/use-cases/create-car';
import { UpdateCarId } from '@application/use-cases/update-carId-rider';
import { GetInfoRider } from '@application/use-cases/inforider-rider';

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
