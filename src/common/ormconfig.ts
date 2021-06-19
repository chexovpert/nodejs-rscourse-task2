import dotenv from "dotenv"
import path from "path"
import {ConnectionOptions} from "typeorm"

dotenv.config({ path: path.join(__dirname, "../../.env") })

export const config = {
    type: 'postgres',
    synchronize: true,
    host: process.env['POSTGRES_HOST'],
    port: process.env['POSTGRES_PORT'],
    username: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    database: process.env['POSTGRES_DB'],
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    entities: ['src/entities/**/*.ts'],
    reconnectionInterval: 1000
} as ConnectionOptions