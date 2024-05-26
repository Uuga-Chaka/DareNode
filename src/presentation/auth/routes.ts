import { FastifyInstance, FastifySchema } from 'fastify'
import { AuthController } from './controller'
import { AuthDataSourceImp } from '../../infraestructure/datasource/auth.datasource.imp'
import { AuthRepositoryImp } from '../../infraestructure/repositories/AuthRepository.imp'

const registerUser = {
  name: { type: 'string' },
  email: { type: 'string' },
  password: { type: 'string' },
  repeatPassword: { type: 'string' },
}

const registerUserSchema: FastifySchema = {
  body: {
    type: 'object',
    properties: registerUser,
    required: ['name', 'email', 'password', 'repeatPassword'],
  },
}

export class AuthRoutes {
  static get = async (app: FastifyInstance) => {
    const datasource = new AuthDataSourceImp()
    const repository = new AuthRepositoryImp(datasource)
    const controller = new AuthController(repository)
    app.post('/register', { schema: registerUserSchema }, controller.register)
    app.get('/get-users', controller.getUsers)
  }
}
