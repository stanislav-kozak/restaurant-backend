import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from '../categories/categories.model';
import { Product } from './products.model';
import { ProductCategory } from '../product-categories/product-categories.model';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [
    SequelizeModule.forFeature([Category, Product, ProductCategory]),
    CategoriesModule,
  ],
})
export class ProductsModule {}
