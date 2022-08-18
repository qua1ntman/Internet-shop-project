import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from './user.role';
import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  Length,
  ValidateIf,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @IsEmpty()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  @Length(5, 10)
  username: string;

  @Column({ nullable: true })
  @IsEmail()
  @ValidateIf((object, value) => value !== undefined)
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  @Column({ default: Role.USER })
  @IsEmpty()
  role: Role;
}
