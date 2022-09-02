import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { JwtPayload } from '../JwtPayload';
import { Bot } from '../Bot';
import { Product } from '../product/product.entity';

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

  async botAdd(token: string) {
    const user = await this.findById(
      (this.jwtService.decode(token) as JwtPayload).id,
    );

    const pin = Array(4)
      .fill(null)
      .map(() => Math.floor(Math.random() * 10))
      .join('');

    Bot.instance.commands.set(pin, (context) => {
      Bot.instance.commands.delete(pin);

      user.subscribed = true;
      user.chatId = context.chatId;
      this.repo.save(user);

      context.send('Subscribed');
    });

    // 5 minutes
    setTimeout(() => Bot.instance.commands.delete(pin), 300000);

    return pin;
  }

  async botDisable(token: string) {
    const user = await this.findById(
      (this.jwtService.decode(token) as JwtPayload).id,
    );

    user.subscribed = false;
  }

  async botEnable(token: string) {
    const user = await this.findById(
      (this.jwtService.decode(token) as JwtPayload).id,
    );

    user.subscribed = true;
  }

  async notifyBot(product: Product) {
    const users = await this.getBotUsers();
    users.forEach((user) => {
      Bot.instance.api.sendMessage({
        chat_id: user.chatId,
        text: `Product ${product.brand} added\n`,
      });
    });
  }

  private getBotUsers() {
    return this.repo.findBy({
      subscribed: true,
    });
  }
}
