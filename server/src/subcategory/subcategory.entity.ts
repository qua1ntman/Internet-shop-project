import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Category } from '../category/category.entity';

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

  @Column('simple-array', { default: [] })
  @IsUrl(undefined, { each: true })
  @IsOptional()
  images: string[];

  @IsEmpty()
  @ManyToOne(() => Category, (category) => category.subcategories)
  category: Category;
}
