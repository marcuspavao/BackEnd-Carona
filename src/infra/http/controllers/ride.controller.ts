import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { GetRiderRides } from '@application/use-cases/get-riders-rides';
import { CreateRideBody } from '../dtos/create-ride-body';
import { RideViewModel } from '@infra/http/view-models/ride-view-model';
import { CraeteRide } from '@application/use-cases/create-ride';
import { CountRides } from '@application/use-cases/count-riders-rides';
import { CancelRide } from '@application/use-cases/cancel-ride';

@Controller('rides')
export class RideController {
  constructor(
    private createRide: CraeteRide,
    private countRidersRides: CountRides,
    private getRidersRides: GetRiderRides,
    private cancelRide: CancelRide
  ) { }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelRide.execute({
      rideId: id,
    });
  }

  @Get('count/from/:riderId')
  async countFromRider(@Param('riderId') riderId: string) {
    const { count } = await this.countRidersRides.execute({
      riderId,
    });

    return {
      count,
    };
  }

  @Get('from/:riderId')
  async getFromRider(@Param('riderId') riderId: string) {
    const { rides } = await this.getRidersRides.execute({
      riderId,
    });

    return {
      rides: rides.map(RideViewModel.toHTTP),
    };
  }

  /*   @Patch(':id/read')
    async read(@Param('id') id: string) {
      await this.readNotification.execute({
        notificationId: id,
      });
    } */

  /*   @Patch(':id/unread')
    async unread(@Param('id') id: string) {
      await this.unreadNotification.execute({
        notificationId: id,
      });
    } */

  @Post()
  async create(@Body() body: CreateRideBody) {
    const { arrivalLocal, arrivingDate, departureDate, departureLocal, info, riderId } = body;

    const { ride } = await this.createRide.execute({
      arrivalLocal,
      arrivingDate,
      departureDate,
      departureLocal,
      info,
      riderId
    });

    return {
      ride: RideViewModel.toHTTP(ride),
    };
  }
}
