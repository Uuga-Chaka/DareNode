import { RegisterUserDTO } from '../dtos'
import { UserEntity } from '../entities'

export abstract class AuthRepository {
  // abstract login(loginUserDTO: LoginUserDTO): Promise<UserEntity>
  abstract register(registerUserDTO: RegisterUserDTO): Promise<UserEntity>
  abstract getUsers(): Promise<UserEntity[]>
  // abstract deleter(deleteUserDTO: DeleteUserDTO): Promise<UserEntity>
  // abstract update(updateUserDTO: UpdateUserDTO): Promise<UserEntity>
}
