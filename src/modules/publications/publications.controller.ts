import { Body, Controller, Get, Post } from '@nestjs/common';
import { PublicationsService } from './publications.service';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Controller('publications')
export class PublicationsController {
  constructor(private readonly publicationsService: PublicationsService) {}

  @Get()
  findAllPublications(): any {
    return this.publicationsService.findAllPublications();
  }

  @Post()
  createPublication(@Body() body: CreatePublicationDTO): void {
    this.publicationsService.createPublication(body);
  }
}
