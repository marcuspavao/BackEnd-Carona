import { SetMetadata } from '@nestjs/common';
//import { Role } from './role.enum';
import { Role } from '@prisma/client';

export const Roles = (...role: Role[]) => SetMetadata('roles', role);
