import { Role } from '@prisma/client';
import { IsEqualTo } from 'src/common/decorators/isEqualto.decorator';
import { IsNotEmpty } from 'class-validator'; //IsDate, IsNotEmpty, IsUUID, Length

export class CreateRiderBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  cpf: string;

  carId?: string;

  email: string;

  password: string;

  @IsEqualTo('password')
  passwordConfirmation: string;

  role?: Role;
}
