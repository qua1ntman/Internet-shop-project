import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { IsEmpty, IsOptional, IsString, IsUrl } from 'class-validator';
import { Subcategory } from '../subcategory/subcategory.entity';
import { JoinColumn } from 'typeorm';

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

  @IsEmpty()
  @ManyToMany(() => Subcategory)
  @JoinTable()
  subcategories: Subcategory[];
}
