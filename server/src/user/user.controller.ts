import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpStatus,
  NotFoundException,
  Param,
  Post,
  Res,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { User, UserLogin } from './user.entity';
import { validateSync } from 'class-validator';
import { UserService } from './user.service';
import { GuardUser } from '../guard/guard.user';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private service: UserService) {}

  @Post('register')
  async register(@Body() user: User) {
    validateSync(user);
    const token = await this.service.register(user);
    if (token) return token;
    throw new BadRequestException('Email already exists');
  }

  @Post('login')
  async login(@Body() user: UserLogin) {
    validateSync(user);
    const token = await this.service.login(user as User);
    if (token) return token;
    throw new UnauthorizedException('Incorrect email or password');
  }

  @Get('validate')
  @UseGuards(GuardUser)
  validateToken(@Res() res: Response) {
    res.status(HttpStatus.OK).send();
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('id/:id')
  async id(@Param('id') id: number) {
    if (isNaN(id)) throw new NotFoundException();
    const user = await this.service.findById(id);
    if (user) return user;
    throw new NotFoundException();
  }

  @Get('email/:email')
  async email(@Param('email') email: string) {
    const user = await this.service.findByEmail(email);
    if (user) return user;
    throw new NotFoundException();
  }
}
