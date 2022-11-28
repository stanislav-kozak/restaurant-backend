import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.model';
import { Product } from '../products/products.model';
import { ProductCategory } from '../product-categories/product-categories.model';

@Module({
  providers: [CategoriesService],
  controllers: [CategoriesController],
  imports: [SequelizeModule.forFeature([Category, Product, ProductCategory])],
  exports: [CategoriesService],
})
export class CategoriesModule {}
