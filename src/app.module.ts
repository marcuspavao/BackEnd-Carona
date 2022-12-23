import { Module } from '@nestjs/common';

import { DatabaseModule } from './infra/prisma/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [HttpModule, DatabaseModule],
})
export class AppModule {}
