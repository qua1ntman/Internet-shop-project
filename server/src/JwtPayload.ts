import { Role } from './Role';

export interface JwtPayload {
  id: number;
  name: string;
  surname: string;
  email: string;
  phone: string;
  role: Role;
}
