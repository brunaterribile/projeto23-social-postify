import { Module } from '@nestjs/common';
import { PublicationsModule } from './modules/publications/publications.module';

@Module({
  imports: [PublicationsModule],
})
export class AppModule {}
