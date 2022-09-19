import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { validateSync } from 'class-validator';
import { Category } from './category.entity';
import { GuardAdmin } from '../guard/guard.admin';

@Controller('category')
export class CategoryController {
  constructor(private service: CategoryService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @UseGuards(GuardAdmin)
  add(@Body() category: Category) {
    validateSync(category);
    return this.service.add(category);
  }

  @Get(':id')
  async id(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const category = await this.service.findById(id);
    if (category) return category;
    throw new NotFoundException();
  }

  @Delete(':id')
  @UseGuards(GuardAdmin)
  async idDelete(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const category = await this.service.deleteById(id);
    if (category) return category;
    throw new NotFoundException();
  }
}
