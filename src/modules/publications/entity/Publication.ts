import { randomUUID } from 'crypto';

export class Publication {
  image: string;
  title: string;
  text: string;
  dateToPublish: Date;
  published: boolean;
  socialMedia: string;
  private readonly userId: string;
  private readonly createdAt: Date;

  constructor(
    imageParams: string,
    titleParams: string,
    textParams: string,
    dateParams: Date,
    publishedParams: boolean,
    socialMediaParams: string,
  ) {
    this.image = imageParams;
    this.title = titleParams;
    this.text = textParams;
    this.dateToPublish = dateParams;
    this.published = publishedParams;
    this.socialMedia = socialMediaParams;
    this.userId = randomUUID();
    this.createdAt = new Date();
  }
}
