import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { User } from './user/user.entity';
import { Category } from './category/category.entity';
import { Product } from './product/product.entity';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user/user.controller';
import { CategoryController } from './category/category.controller';
import { ProductController } from './product/product.controller';
import { UserService } from './user/user.service';
import { CategoryService } from './category/category.service';
import { ProductService } from './product/product.service';
import { SubcategoryService } from './subcategory/subcategory.service';
import { SubcategoryController } from './subcategory/subcategory.controller';
import { Subcategory } from './subcategory/subcategory.entity';

const entities = [User, Category, Product, Subcategory];
const controllers = [
  UserController,
  CategoryController,
  ProductController,
  SubcategoryController,
];
const providers = [
  UserService,
  CategoryService,
  ProductService,
  SubcategoryService,
];

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities,
      synchronize: true,
    }),
    TypeOrmModule.forFeature(entities),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        algorithm: 'HS256',
        expiresIn: '7d',
      },
    }),
  ],
  controllers,
  providers,
})
export class AppModule {}
