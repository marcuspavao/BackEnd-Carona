import { Injectable } from '@nestjs/common';
import { CarRepository } from '../repositories/car-repository';
import { Car } from '../entities/car';

interface CreateCarRequest {
  model: string;
  modelYear: string;
  plate: string;
  riderId: string;
}

interface CreateCarResponse {
  car: Car;
}

@Injectable()
export class CreateCar {
  constructor(private carRepository: CarRepository) {}

  async execute(request: CreateCarRequest): Promise<CreateCarResponse> {
    const { model, modelYear, plate, riderId } = request;

    //await this.carRepository.create(car);
    //if(!riderId)

    const car = new Car({
      model,
      modelYear,
      plate,
      riderId,
    });

    await this.carRepository.create(car);

    return {
      car,
    };
  }
}
