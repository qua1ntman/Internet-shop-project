import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { SubcategoryService } from '../subcategory/subcategory.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,

    private subcategoryService: SubcategoryService,
  ) {}

  findAll() {
    return this.repo.find();
  }

  async add(product: Product) {
    // TODO
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  async deleteById(id: number) {
    const product = await this.findById(id);
    if (!product) return null;

    await this.repo.delete({ id: product.id });
    return product;
  }
}
