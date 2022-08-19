import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsEmail,
  IsEmpty,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';
import { Role } from '../Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column({ unique: true })
  @IsString()
  @Length(5, 10)
  username: string;

  @Column({ nullable: true })
  @IsEmail()
  @IsOptional()
  email: string;

  @Column()
  @IsString()
  password: string;

  @Column({ default: Role.USER })
  @IsEmpty()
  role: Role;
}
