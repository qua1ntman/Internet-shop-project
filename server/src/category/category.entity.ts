import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsNotEmpty } from 'class-validator';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column()
  @IsNotEmpty()
  title: string;

  @Column({ nullable: true })
  description: string;
}
