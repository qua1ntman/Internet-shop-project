import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsNotEmpty, IsOptional, IsUrl } from 'class-validator';

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

  @Column({ nullable: true })
  @IsUrl()
  @IsOptional()
  thumbnail: string;

  @Column('simple-array', { default: [] })
  @IsUrl(undefined, { each: true })
  @IsOptional()
  images: string[];
}
