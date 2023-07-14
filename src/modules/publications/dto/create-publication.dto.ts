import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class CreatePublicationDTO {
  @IsString()
  @IsNotEmpty()
  image: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  text: string;

  @IsDate()
  dateToPublish: Date;

  @IsBoolean()
  published: boolean;

  @IsString()
  @IsNotEmpty()
  socialMedia: string;
}
