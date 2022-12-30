import {
  Body,
  Controller,
  Get,
  Param,
  Request,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CreateRiderBody } from '../dtos/create-rider-body';
import { RiderViewModel } from '@infra/http/view-models/rider-view-model';
import { CreateRider } from '@application/use-cases/rider/create-rider';
import { UpdateCarId } from '@application/use-cases/rider/update-carId-rider';
import { GetInfoRider } from '@application/use-cases/rider/inforider-rider';
import { GetAllRider } from '@application/use-cases/rider/getall-rider';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from 'src/common/decorators/role.decorator';
import { Role } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { RiderRepository } from '@application/repositories/rider-repository';

@Controller('rider')
export class RiderController {
  constructor(
    private createRider: CreateRider,
    private updateCarId: UpdateCarId,
    private getInfo: GetInfoRider,
    private getAll: GetAllRider,
    private jwtService: JwtService,
    private riderRepository: RiderRepository,
  ) {}

  @Post()
  async create(@Body() body: CreateRiderBody) {
    const { cpf, name, carId, email, password, passwordConfirmation } = body;

    const { rider } = await this.createRider.execute({
      cpf,
      name,
      carId,
      email,
      password,
      passwordConfirmation,
    });

    return {
      rider: RiderViewModel.toHTTP(rider),
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('from/')
  async getInfoRider(@Body() riderId: any) {
    const { rider } = await this.getInfo.execute({
      riderId,
    });

    return {
      rider: rider,
    };
  }

  //@UseGuards(AuthGuard) TESTE PARA ROTAS DE APENAS USUARIOS ONDE O EMAIL TEM DE SER IGUAL
  //@Roles(Role.ADMIN)
  /*   @Get('from/:riderId')
  async getFromRider(@Param('riderId') riderId: string, @Request() req: any) {
    const token = req.headers.authorization.split(' ');

    const decodedJwtAccessToken = await this.jwtService.decode(token[1]);

    const r = await this.riderRepository.findByEmail(
      decodedJwtAccessToken['email'],
    );

    const { rider } = await this.getInfo.execute({
      riderId,
    });

    if (!(rider.email === r.email)) {
      throw new Error('EMAIL DIFERENTE');
    }

    return {
      rider: RiderViewModel.toHTTP(rider),
    };
  } */

  @Get('from/:riderId')
  async getFromRider(@Body() req: any) {
    const { ...body } = req;

    //console.log(body);

    const { rider } = await this.getInfo.execute(body);

    return {
      rider: rider,
    };
  }

  @UseGuards(AuthGuard('jwt'))
  @Roles(Role.ADMIN)
  @Get('')
  async getAllRiders() {
    const { riders } = await this.getAll.execute();

    return {
      riders,
    };
  }

  @Patch('update/rider')
  async cancel(@Body() body: any) {
    const { id, carId } = body;
    await this.updateCarId.execute({
      riderId: id,
      id: carId,
    });
  }

  @Patch('update/role')
  async roleUpdate(@Body() body: any) {
    const { id, carId } = body;
    await this.updateCarId.execute({
      riderId: id,
      id: carId,
    });
  }
}
