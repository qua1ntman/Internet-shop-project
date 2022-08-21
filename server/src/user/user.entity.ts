import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsEmail, IsEmpty, IsMobilePhone, IsString } from 'class-validator';
import { Role } from '../Role';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  surname: string;

  @Column({ unique: true })
  @IsEmail()
  email: string;

  @Column()
  @IsMobilePhone()
  phone: string;

  @Column()
  @IsString()
  password: string;

  @Column({ default: Role.USER })
  @IsEmpty()
  role: Role;
}