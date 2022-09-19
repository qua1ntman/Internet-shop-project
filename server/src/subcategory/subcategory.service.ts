import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from './subcategory.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    public repo: Repository<Subcategory>,
  ) {}

  findAll() {
    return this.repo.find({
      relations: {
        products: true,
      },
    });
  }

  add(subcategory: Subcategory) {
    return this.repo.save(subcategory);
  }

  findById(id: number) {
    return this.repo.findOne({
      where: {
        id,
      },
      relations: {
        products: true,
      },
    });
  }

  async deleteById(id: number) {
    const category = await this.findById(id);
    if (!category) return null;

    await this.repo.delete({ id: category.id });
    return category;
  }
}
