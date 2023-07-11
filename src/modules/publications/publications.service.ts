import { Injectable } from '@nestjs/common';
import { Publication } from './entity/Publication';

@Injectable()
export class PublicationsService {
  posts: Publication[] = [];

  createPublication(body: Publication): void {
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
