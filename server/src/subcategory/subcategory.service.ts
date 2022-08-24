import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subcategory } from './subcategory.entity';

@Injectable()
export class SubcategoryService {
  constructor(
    @InjectRepository(Subcategory)
    private repo: Repository<Subcategory>,
  ) {}

  findAll() {
    return this.repo.find();
  }

  add(subcategory: Subcategory) {
    return this.repo.save(subcategory);
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  async deleteById(id: number) {
    const category = await this.findById(id);
    if (!category) return null;

    await this.repo.delete({ id: category.id });
    return category;
  }
}
