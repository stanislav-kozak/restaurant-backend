import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../products/products.model';
import { ProductCategory } from '../product-categories/product-categories.model';

interface CategoriesCreationAttrs {
  name: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoriesCreationAttrs> {
  @ApiProperty({
    example: '1',
    description: 'Unique identification',
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Pizza',
    description: 'Unique email',
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  name: string;

  @BelongsToMany(() => Product, () => ProductCategory)
  products: Product[];
}
