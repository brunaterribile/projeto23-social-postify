import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;
  title: string;
  text: string;

  @IsDate()
  dateToPublish: Date;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
