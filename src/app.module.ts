import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/prisma/database.module';
import { HttpModule } from './infra/http/http.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [HttpModule, DatabaseModule, AuthModule],
})
export class AppModule {}
