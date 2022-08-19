import { CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Role } from '../Role';
import { JwtPayload } from '../JwtPayload';

export abstract class Guard implements CanActivate {
  protected constructor(
    private jwtService: JwtService,
    private allowed: Role[],
  ) {}

  canActivate(context: ExecutionContext) {
    const req = context.switchToHttp().getRequest();
    try {
      const authHeader = req.headers.authorization;
      const [bearer, token] = authHeader.split(' ');

      if (!(bearer === 'Bearer' && token)) return false;

      req.user = this.jwtService.verify(token);
      return this.allowed.includes(
        (this.jwtService.decode(token) as JwtPayload).role,
      );
    } catch (_) {
      return false;
    }
  }
}
