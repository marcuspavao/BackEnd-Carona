import { Body, Controller, Post } from '@nestjs/common';
import { CreateCarBody } from '../dtos/create-car-body';
import { UpdateCarId } from '@application/use-cases/update-carId-rider';
import { CarViewModel } from '@infra/http/view-models/car-view-model';
import { CreateCar } from '@application/use-cases/create-car';

@Controller('car')
export class CarController {
  constructor(private createCar: CreateCar, private updateCarId: UpdateCarId) {}

  @Post()
  async create(@Body() body: CreateCarBody) {
    const { model, modelYear, plate, riderId } = body;

    const { car } = await this.createCar.execute({
      model,
      modelYear,
      plate,
      riderId,
    });

    await this.updateCarId.execute({
      riderId: riderId,
      id: car.id,
    });

    return {
      car: CarViewModel.toHTTP(car),
    };
  }
}
