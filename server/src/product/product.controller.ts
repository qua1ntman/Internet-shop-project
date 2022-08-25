import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { GuardAdmin } from '../guard/guard.admin';
import { validateSync } from 'class-validator';
import { Product } from './product.entity';

@Controller('product')
export class ProductController {
  constructor(private service: ProductService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  @UseGuards(GuardAdmin)
  async add(@Body() product: Product) {
    validateSync(product);
    const result = await this.service.add(product);
    if (Array.isArray(result))
      throw new BadRequestException(
        `Unknown category ids [${result.join(', ')}]`,
      );
    return result;
  }

  @Get(':id')
  async id(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const product = await this.service.findById(id);
    if (product) return product;
    throw new NotFoundException();
  }

  @Delete(':id')
  @UseGuards(GuardAdmin)
  async idDelete(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const product = await this.service.deleteById(id);
    if (product) return product;
    throw new NotFoundException();
  }
}
