import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Subcategory } from '../subcategory/subcategory.entity';

@Entity()
export class Category {
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

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  @IsEmpty()
  subcategories: Subcategory[];
}
