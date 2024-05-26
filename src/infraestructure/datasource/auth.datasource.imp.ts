import { UserModel } from '../../data/mongoDB'
import { AuthDataSource } from '../../domain/datasources/auth.datasource'
import { RegisterUserDTO } from '../../domain/dtos'
import { UserEntity } from '../../domain/entities/user.entity'
import { CustomError } from '../../domain/errors/custom.errors'
import { UserMapper } from '../mappers/user.mapper'

export class AuthDataSourceImp implements AuthDataSource {
  async register(registerUserDTO: RegisterUserDTO): Promise<UserEntity> {
    const { email } = registerUserDTO
    try {
      const exists = await UserModel.findOne({ email })
      if (exists) throw CustomError.badRequest('User already exists')
      const user = await UserModel.create(registerUserDTO)
      await user.save()

      return UserMapper.userEntityFromObject(user)
    } catch (err) {
      if (err instanceof CustomError) {
        throw err
      }
      throw CustomError.badRequest(err as string)
    }
  }
  async getUsers(): Promise<UserEntity[]> {
    try {
      const users = await UserModel.find({})
      if (!users) throw CustomError.badRequest('No users')
      return users.map(user => UserMapper.userEntityFromObject(user))
    } catch (err) {
      if (err instanceof CustomError) {
        throw err
      }
      throw CustomError.badRequest(err as string)
    }
  }
}
