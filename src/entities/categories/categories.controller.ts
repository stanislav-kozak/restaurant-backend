import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Roles } from '../../auth/roles-auth.decorator';
import { Category } from './categories.model';

@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @ApiOperation({
    summary: 'Create category',
  })
  @ApiResponse({
    status: 200,
    type: Category,
  })
  @Post()
  create(@Body() categoryDto: CreateCategoryDto) {
    return this.categoriesService.createCategory(categoryDto);
  }

  @ApiOperation({
    summary: 'Get all categories',
  })
  @ApiResponse({
    status: 200,
    type: [Category],
  })
  @Roles('ADMIN')
  @Get()
  getAll() {
    return this.categoriesService.getAllCategory();
  }
}
