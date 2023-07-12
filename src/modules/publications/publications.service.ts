import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';
import { CreatePublicationDTO } from './dto/create-publication.dto';

@Injectable()
export class PublicationsService {
  posts: Publication[] = [];

  createPublication(body: CreatePublicationDTO): void {
    const post = new Publication(
      body.image,
      body.title,
      body.text,
      body.dateToPublish,
      body.published,
      body.socialMedia,
    );
    this.posts.push(post);
  }
  findAllPublications(): Publication[] {
    return this.posts;
  }
}
