import { Module } from '@nestjs/common';
import { PublicationsModule } from './modules/publications/publications.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PublicationsModule, UsersModule, PrismaModule],
})
export class AppModule {}
