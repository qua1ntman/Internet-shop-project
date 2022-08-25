import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';
import { Category } from '../category/category.entity';
import { SubcategoryService } from '../subcategory/subcategory.service';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>,

    private subcategoryService: SubcategoryService,
  ) {}

  findAll() {
    return this.repo.find({
      relations: {
        subcategories: true,
      },
    });
  }

  async add(product: Product) {
    product.subcategoryIds = Array.from(new Set(product.subcategoryIds));
    product.subcategories = await Promise.all(
      product.subcategoryIds.map((id) => {
        return this.subcategoryService.findById(id);
      }),
    );

    const invalidIds = [];
    product.subcategories.forEach((category, index) => {
      if (category instanceof Category) return;
      invalidIds.push(product.subcategoryIds[index]);
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
