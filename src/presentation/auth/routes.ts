import fastify, { FastifyInstance, FastifyPluginOptions } from "fastify";

export class AuthRoutes {
  static async get(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/", async (req, res) => {
      return { hello: "world" };
    });
    fastify.get("/test", async (req, res) => {
      return { ahh: "test" };
    });
  }
}
