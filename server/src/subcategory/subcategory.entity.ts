import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';

@Entity()
export class Subcategory {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column()
  @IsString()
  title: string;

  @Column({ nullable: true })
  @IsString()
  @IsOptional()
  description: string;

  @Column({ nullable: true })
  @IsUrl()
  @IsOptional()
  thumbnail: string;

  @ManyToMany(() => Category)
  @IsEmpty()
  categories: Category[];

  @ManyToMany(() => Product)
  @IsEmpty()
  @JoinTable()
  products: Product[];
}
