import { RegisterUserDTO } from '../dtos'
import { UserEntity } from '../entities/user.entity'

export abstract class AuthDataSource {
  // abstract login(loginUserDTO: LoginUserDTO): Promise<UserEntity>
  abstract register(registerUserDTO: RegisterUserDTO): Promise<UserEntity>
  abstract getUsers(): Promise<UserEntity[]>
  // abstract deleter(deleteUserDTO: DeleteUserDTO): Promise<UserEntity>
  // abstract update(updateUserDTO: UpdateUserDTO): Promise<UserEntity>
}
