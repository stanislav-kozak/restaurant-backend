import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'google@gmail.com',
    description: 'Email',
  })
  readonly email: string;

  @ApiProperty({
    example: '12345678',
    description: 'Password',
  })
  readonly password: string;
}
