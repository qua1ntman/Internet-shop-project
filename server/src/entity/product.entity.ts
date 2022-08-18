import {Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Category} from "./category.entity";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Category)
  @JoinColumn()
  category: Category;

  @Column()
  title: string;

  @Column('text')
  description: string;
}