import dotenv from "dotenv"
import path from "path"
import {ConnectionOptions} from "typeorm"

dotenv.config({ path: path.join(__dirname, "../../.env") })
const config = {
    type: 'postgres',
    synchronize: false,
    host: process.env['POSTGRES_HOST'],
    port: process.env['POSTGRES_PORT'],
    username: process.env['POSTGRES_USER'],
    password: process.env['POSTGRES_PASSWORD'],
    database: process.env['POSTGRES_DB'],
    autoReconnect: true,
    migrationsRun: true,
    //logging: true,
    reconnectTries: Number.MAX_VALUE,
    entities: ['src/entities/**/*.ts'],
    migrationsTableName: "custom_migration_table",
    migrations: ['src/migrations/**/*.ts'],
    reconnectionInterval: 1000,
    cli: {
        migrationsDir: 'src/migrations'
      }
} as ConnectionOptions
export = config