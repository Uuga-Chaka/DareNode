import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";
import { AuthRoutes } from "./auth/routes";
import { Routes } from "./routes";

type IOptions = {
  port: number;
  routes: (
    fastify: FastifyInstance,
    options: FastifyPluginOptions
  ) => Promise<void>;
};

export class Server {
  public readonly app = fastify({ logger: true });
  private readonly port: IOptions["port"];
  private readonly routes: IOptions["routes"];

  constructor(options: IOptions) {
    const { port, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    try {
      this.app.register(Routes.all);
      this.app.listen({ port: this.port });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }
}
