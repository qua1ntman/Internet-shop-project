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

  @Column({ default: false })
  @IsEmpty()
  subscribed: boolean;

  @Column({ nullable: true })
  @IsEmpty()
  chatId: number;
}

export class UserLogin {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
