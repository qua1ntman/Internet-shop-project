import { Injectable } from '@nestjs/common';
import { Guard } from './guard';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../Role';

@Injectable()
export class GuardAdmin extends Guard {
  constructor(jwtService: JwtService) {
    super(jwtService, [Role.ADMIN]);
  }
}
