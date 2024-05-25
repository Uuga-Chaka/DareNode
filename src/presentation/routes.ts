import { FastifyInstance } from 'fastify'
import { AuthRoutes } from './auth/routes'

export class Routes {
  static all = async (fastify: FastifyInstance) => {
    await fastify.register(AuthRoutes.get)
  }
}
