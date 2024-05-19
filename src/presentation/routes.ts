import { FastifyInstance, FastifyPluginOptions } from "fastify";
import { AuthRoutes } from "./auth/routes";

export class Routes {
  static async all(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.register(AuthRoutes.get);
  }
}
