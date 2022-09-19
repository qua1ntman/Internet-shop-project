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

  async findAll(
    brand: string,
    collection: string,
    subcategory: string,
    page: number,
  ) {
    const perPage = 10;
    const skip = (page - 1) * perPage;
    const take = perPage;

    if (subcategory) {
      const subcategories = await this.subcategoryService.repo.find({
        where: {
          title: subcategory,
        },
        relations: {
          products: true,
        },
      });

      let products = subcategories
        .map((subcategory) => subcategory.products)
        .flat();

      if (brand)
        products = products.filter((product) => product.brand === brand);
      if (collection)
        products = products.filter(
          (product) => product.collection === collection,
        );

      return products.slice(skip, skip + take);
    }

    return this.repo.find({
      where: {
        brand,
        collection,
      },
      skip,
      take,
    });
  }

  async add(product: Product) {
    const subcategories = await Promise.all(
      product.subcategoryIds.map((id) => this.subcategoryService.findById(id)),
    );

    if (subcategories.includes(null))
      return subcategories.filter((sc) => sc === null);

    product.subcategoryIds = undefined;
    await this.repo.save(product);
    subcategories.forEach((subcategory) => {
      subcategory.products.push(product);
      this.subcategoryService.add(subcategory);
    });

    return product;
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
