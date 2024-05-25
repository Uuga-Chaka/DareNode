import { UserRole } from '../../data/mongoDB'

export class UserEntity {
  constructor(
    public id: string,
    public name: string,
    public birthdate: number,
    public email: string,
    public password: string | number,
    public role?: UserRole | undefined | null,
    public photo?: string | null | undefined
  ) {}
}
