import { IsNotEmpty } from 'class-validator'; //IsDate, IsNotEmpty, IsUUID, Length

export class CreateRiderBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  carId?: string;
}
