import { IsNotEmpty } from 'class-validator'; //IsDate, IsNotEmpty, IsUUID, Length

export class CreateCarBody {
  @IsNotEmpty()
  model: string;

  @IsNotEmpty()
  modelYear: string;

  @IsNotEmpty()
  plate: string;

  riderId?: string;
}
