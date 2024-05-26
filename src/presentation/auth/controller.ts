import { FastifyReply, FastifyRequest } from 'fastify'
import { AuthRepository } from '../../domain/repositories'
import { RegisterUserDTO } from '../../domain/dtos'
import { RegisterRequest } from '../../domain/requestTypes/auth.requestTypes'
import { CustomError } from '../../domain/errors/custom.errors'

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError = (error: unknown, rep: FastifyReply) => {
    if (error instanceof CustomError) return rep.code(400).send({ error: error.message })
    return rep.code(500).send({ error: 'Internal server error' })
  }

  register = async (req: RegisterRequest, rep: FastifyReply) => {
    const [error, registerUserDTO] = RegisterUserDTO.create(req.body)
    if (error) return rep.status(400).send({ error })
    return this.authRepository.register(registerUserDTO!)
  }

  getUsers = async (req: FastifyRequest, rep: FastifyReply) => {
    return this.authRepository.getUsers()
  }
}
