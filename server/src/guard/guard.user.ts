import { Injectable } from '@nestjs/common';
import { Guard } from './guard';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../Role';

@Injectable()
export class GuardUser extends Guard {
  constructor(jwtService: JwtService) {
    super(jwtService, [Role.USER, Role.ADMIN]);
  }
}
