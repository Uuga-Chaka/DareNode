import { FastifyRequest } from 'fastify'

export interface RegisterBody {
  name: string
  password: string | number
  repeatPassword: string | number
  email: string
  birthdate: string
}

export type RegisterRequest = FastifyRequest<{ Body: RegisterBody }>
