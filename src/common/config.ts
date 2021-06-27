import  dotenv from "dotenv";
import { Secret } from "jsonwebtoken";
import  path from "path"

dotenv.config({ path: path.join(__dirname, "../../.env") })

interface IConfig  {
  PORT: string | undefined,
  NODE_ENV: string | undefined,
  MONGO_CONNECTION_STRING: string | undefined,
  JWT_SECRET_KEY: Secret,
  AUTH_MODE: boolean,
  DEFAULT_SALT_ROUNDS : string
}

const config: IConfig = {
  PORT: process.env["PORT"],
  NODE_ENV: process.env["NODE_ENV"],
  MONGO_CONNECTION_STRING: process.env["MONGO_CONNECTION_STRING"],
  JWT_SECRET_KEY: process.env["JWT_SECRET_KEY"]!,
  AUTH_MODE: process.env["AUTH_MODE"] === 'true',
  DEFAULT_SALT_ROUNDS: process.env["DEFAULT_SALT_ROUNDS"]!,
}

export default config
