import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsStrongPassword({
    minLength: 6,
    minLowercase: 2,
    minSymbols: 1,
    minUppercase: 1,
    minNumbers: 3,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  avatar: string;
}
