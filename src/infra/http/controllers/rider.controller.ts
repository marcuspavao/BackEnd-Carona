import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateRiderBody } from '../dtos/create-rider-body';
import { RiderViewModel } from '@infra/http/view-models/rider-view-model';
import { CreateRider } from '@application/use-cases/create-rider';
import { UpdateCarId } from '@application/use-cases/update-carId-rider';
import { GetInfoRider } from '@application/use-cases/inforider-rider';

@Controller('rider')
export class RiderController {
  constructor(
    private createRider: CreateRider,
    private updateCarId: UpdateCarId,
    private getInfo: GetInfoRider,
  ) {}

  @Post()
  async create(@Body() body: CreateRiderBody) {
    const { cpf, name, carId } = body;

    const { rider } = await this.createRider.execute({
      cpf,
      name,
      carId,
    });

    return {
      rider: RiderViewModel.toHTTP(rider),
    };
  }

  @Get('from/')
  async getInfoRider(@Body() riderId: any) {
    const { rider } = await this.getInfo.execute({
      riderId,
    });

    return {
      rider: RiderViewModel.toHTTP(rider),
    };
  }

  @Get('from/:riderId')
  async getFromRider(@Param('riderId') riderId: string) {
    const { rider } = await this.getInfo.execute({
      riderId,
    });

    return {
      rider: RiderViewModel.toHTTP(rider),
    };
  }

  @Patch('update')
  async cancel(@Body() body: any) {
    const { id, carId } = body;
    await this.updateCarId.execute({
      riderId: id,
      id: carId,
    });
  }
}
