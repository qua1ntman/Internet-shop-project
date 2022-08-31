import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from '../JwtPayload';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async register(user: User) {
    if (await this.findByEmail(user.email)) return null;

    user.password = bcrypt.hashSync(user.password, 5);
    return this.generateToken(await this.repo.save(user));
  }

  async login(user: User) {
    return this.generateToken(await this.validateUser(user));
  }

  findAll() {
    return this.repo.find();
  }

  findById(id: number) {
    return this.repo.findOneBy({ id });
  }

  findByEmail(email: string) {
    return this.repo.findOneBy({ email });
  }

  private generateToken(user: User) {
    if (!user) return null;

    return {
      token: this.jwtService.sign(<JwtPayload>{ ...user, password: undefined }),
    };
  }

  private async validateUser(user: User) {
    const userToCheck = await this.findByEmail(user.email);
    return userToCheck &&
      bcrypt.compareSync(user.password, userToCheck.password)
      ? userToCheck
      : null;
  }
}
