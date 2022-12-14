import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { GuardAdmin } from '../guard/guard.admin';
import { validateSync } from 'class-validator';
import { Product } from './product.entity';
import { UserService } from '../user/user.service';

@Controller('product')
export class ProductController {
  constructor(
    private service: ProductService,
    private userService: UserService,
  ) {}

  @Get()
  findAll(
    @Query('brand') brand: string,
    @Query('collection') collection: string,
    @Query('subcategory') subcategory: string,
    @Query('page') page: number,
  ) {
    return this.service.findAll(brand, collection, subcategory, page);
  }

  @Post()
  @UseGuards(GuardAdmin)
  async add(@Body() product: Pro    duct) {
    validateSync(product);
    const result = await this.service.add(product);
    if (Array.isArray(result))
      throw new BadRequestException(
        `Unknown subcategory ids [${result.join(', ')}]`,
      );

    await this.userService.notifyBot(product);
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
