import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsNotEmpty } from 'class-validator';
import { JoinColumn } from 'typeorm';
import { Category } from '../category/category.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column({ nullable: true })
  description: string;

  @JoinColumn()
  @IsNotEmpty()
  @OneToMany(() => Category, (category) => category.id)
  categories: Category[];
}
