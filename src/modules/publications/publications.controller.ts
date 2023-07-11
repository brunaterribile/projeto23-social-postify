import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { Publication } from './entity/Publication';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Get()
  findAllPublications(): any {
    return this.publicationsService.findAllPublications();
  }

  @Post()
  createPublication(@Body() body: Publication): void {
    this.publicationsService.createPublication(body);
  }
}
