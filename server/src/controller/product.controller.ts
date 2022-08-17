import {Controller, Get} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Product} from "../entity/product.entity";
import {Repository} from "typeorm";

@Controller('product')
export class ProductController {
  constructor(
    @InjectRepository(Product)
    private repo: Repository<Product>
  ) {}

  @Get()
  all() {
    return this.repo.find();
  }
}