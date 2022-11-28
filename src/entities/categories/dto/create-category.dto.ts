import { IsString } from 'class-validator';

export class CreateCategoryDto {
  @IsString({ message: 'Must be a string' })
  readonly name: string;
}
