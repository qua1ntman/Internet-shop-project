import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsInt, IsOptional, IsString, IsUrl } from 'class-validator';
import { Category } from '../category/category.entity';
import { JoinTable } from 'typeorm';

@Entity()
export class Product {
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

  @Column('simple-array', { default: [] })
  @IsUrl(undefined, { each: true })
  @IsOptional()
  images: string[];

  @IsEmpty()
  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];

  @IsInt({ each: true })
  categoryIds: number[];
}
