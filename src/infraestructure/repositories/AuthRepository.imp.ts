import { AuthDataSource } from '../../domain/datasources/auth.datasource'
import { RegisterUserDTO } from '../../domain/dtos'
import { UserEntity } from '../../domain/entities'
import { AuthRepository } from '../../domain/repositories'

export class AuthRepositoryImp implements AuthRepository {
  constructor(private readonly authDataSource: AuthDataSource) {}
  getUsers(): Promise<UserEntity[]> {
    return this.authDataSource.getUsers()
  }
  register(registerUserDTO: RegisterUserDTO): Promise<UserEntity> {
    return this.authDataSource.register(registerUserDTO)
  }
}
