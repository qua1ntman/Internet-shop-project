import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsBoolean,
  IsEmpty,
  IsInt,
  IsJSON,
  IsNumber,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';

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

  @Column('simple-array', { default: {} })
  @IsUrl(undefined, { each: true })
  @IsOptional()
  images: string[];

  @IsInt({ each: true })
  subcategoryIds: number[];

  @IsBoolean()
  @Column({ default: false })
  @IsOptional()
  new: boolean;

  @IsString()
  @Column()
  color: string;

  @IsOptional()
  @IsJSON()
  @Column('simple-json', { default: {} })
  colors: object;

  @IsNumber({ maxDecimalPlaces: 2 })
  @Column('float')
  price: number;

  @Column('simple-array', { default: {} })
  @IsOptional()
  @IsString({ each: true })
  material: string[];

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  collection: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  kind: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  discount: number;
}
