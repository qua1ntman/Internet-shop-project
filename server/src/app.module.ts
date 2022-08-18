import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Category} from "./entity/category.entity";
import {Product} from "./entity/product.entity";
import {ProductController} from "./controller/product.controller";
import {CategoryController} from "./controller/category.controller";

const entities = [
  Category,
  Product,
];
const controllers = [
  CategoryController,
  ProductController
]

@Module({
  imports: [
    TypeOrmModule.forFeature(entities),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '129.151.199.112',
      port: 5432,
      username: 'rsshop',
      password: 'PWkemXPyJCiF',
      database: 'rsshop',
      entities: entities,
      synchronize: true
    })
  ],
  controllers: controllers,
})
export class AppModule {}
