import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    example: 'google@gmail.com',
    description: 'Email',
  })
  @IsString({ message: 'Must be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Password',
  })
  @IsString({ message: 'Must be a string' })
  @Length(4, 20, { message: 'Must be more then 4 and less 20 symbol' })
  readonly password: string;
}
