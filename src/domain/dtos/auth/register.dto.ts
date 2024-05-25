import { validate } from '../../../config/validators'
import { RegisterBody } from '../../requestTypes/auth.requestTypes'

type Returning = [error: string, object: undefined] | [error: undefined, object: RegisterUserDTO]

export class RegisterUserDTO {
  public name
  public email
  public password
  public birthdate
  public repeatPassword
  constructor({ name, email, password, birthdate, repeatPassword }: RegisterBody) {
    this.name = name
    this.email = email
    this.password = password
    this.birthdate = birthdate
    this.repeatPassword = repeatPassword
  }

  static create = (object: RegisterBody): Returning => {
    const { name, email, password, repeatPassword, birthdate } = object

    if (!name) return ['Missing name', undefined]
    if (!email) return ['Missing email', undefined]
    if (!validate.email.test(email)) return ['Email is not valid', undefined]
    if (!password) return ['Missing password', undefined]
    if (!birthdate) return ['Missing birthdate', undefined]
    if (!repeatPassword) return ['Missing repeated', undefined]

    return [undefined, new RegisterUserDTO({ name, email, password, birthdate, repeatPassword })]
  }
}
