import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

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
}
