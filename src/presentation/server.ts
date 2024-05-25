import fastify, { FastifyInstance, FastifyPluginOptions } from 'fastify'
import { Routes } from './routes'

type IRoutes = (fastify: FastifyInstance, options: FastifyPluginOptions) => Promise<void>

interface IOptions {
  port: number
  routes: IRoutes
}

export class Server {
  public readonly app = fastify({ logger: true })
  private readonly port: IOptions['port']
  private readonly routes: IOptions['routes']

  constructor(options: IOptions) {
    const { port, routes } = options
    this.port = port
    this.routes = routes
  }

  async start() {
    try {
      await this.app.register(Routes.all)
      await this.app.listen({ port: this.port })
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
  }
}
