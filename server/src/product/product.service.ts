import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { CategoryService } from '../category/category.service';
import { Category } from '../category/category.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,

    private categoryService: CategoryService,
  ) {}

  findAll() {
    return this.repo.find({
      relations: {
        categories: true,
      },
    });
  }

  async add(product: Product) {
    product.categoryIds = Array.from(new Set(product.categoryIds));
    product.categories = await Promise.all(
      product.categoryIds.map((id) => {
        return this.categoryService.findById(id);
      }),
    );

    const invalidIds = [];
    product.categories.forEach((category, index) => {
      if (category instanceof Category) return;
      invalidIds.push(product.categoryIds[index]);
    });

    if (invalidIds.length) return invalidIds;
    return await this.repo.save(product);
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
