import { IsDate, IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateRideBody {
  @IsNotEmpty()
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
