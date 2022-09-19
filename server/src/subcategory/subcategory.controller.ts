import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { SubcategoryService } from './subcategory.service';

@Controller('subcategory')
export class SubcategoryController {
  constructor(private service: SubcategoryService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  async id(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const category = await this.service.findById(id);
    if (category) return category;
    throw new NotFoundException();
  }
}
