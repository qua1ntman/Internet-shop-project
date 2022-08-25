import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private repo: Repository<Category>,
  ) {}

  findAll() {
    return this.repo.find({
      relations: {
        subcategories: true,
      },
    });
  }

  add(category: Category) {
    return this.repo.save(category);
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
