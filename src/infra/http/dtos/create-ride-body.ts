import { IsNotEmpty, IsUUID } from 'class-validator'; //IsDate, IsNotEmpty, IsUUID, Length

export class CreateRideBody {
  @IsNotEmpty()
  @IsUUID()
  riderId: string;

  info: string;

  @IsNotEmpty()
  arrivalLocal: string;

  @IsNotEmpty() //@Length(5, 240)
  departureLocal: string;

  @IsNotEmpty()
  arrivingDate: string;

  @IsNotEmpty()
  departureDate: string;
}
