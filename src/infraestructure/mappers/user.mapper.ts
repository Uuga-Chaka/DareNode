import { IUserSchema } from '../../data/mongoDB'
import { UserEntity } from '../../domain/entities'

export class UserMapper {
  static userEntityFromObject(user: IUserSchema): UserEntity {
    const { _id, birthdate, email, name, password, photo, role } = user

    return new UserEntity(_id as string, name, birthdate, email, password, role, photo)
  }
}
