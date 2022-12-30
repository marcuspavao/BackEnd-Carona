import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
//import { Role } from './role.enum';
import { Role } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { RiderRepository } from '@application/repositories/rider-repository';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
    private riderRepository: RiderRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    const ctx = context.switchToHttp().getRequest();

    const token = ctx.headers.authorization.split(' ');

    const decodedJwtAccessToken = this.jwtService.decode(token[1]);

    //console.log(decodedJwtAccessToken);
    //console.log(ctx.headers.authorization);

    //if (decodedJwtAccessToken['email'] == ) {
    //  return true;
    //} else {
    return requiredRoles.some((role) =>
      decodedJwtAccessToken['role'].includes(role),
    );
    //}
  }
}
