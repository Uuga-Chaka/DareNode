import { envs } from './config/envs'
import { MongoDB } from './data/mongoDB'
import { Routes } from './presentation/routes'
import { Server } from './presentation/server'

// eslint-disable-next-line @typescript-eslint/no-floating-promises
;(() => main())()

async function main() {
  await MongoDB.connect({
    url: envs.DB_URL,
    dbName: envs.DB_USER,
  })
  await new Server({ port: 3000, routes: Routes.all }).start()
}
