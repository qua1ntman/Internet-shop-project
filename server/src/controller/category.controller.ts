import {Controller, Get} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Category} from "../entity/category.entity";

@Controller('category')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private repo: Repository<Category>
  ) {}

  @Get()
  all() {
    return this.repo.find();
  }
}