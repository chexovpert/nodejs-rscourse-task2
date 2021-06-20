import config from "../common/ormconfig"
import {Connection, createConnection, getConnection} from "typeorm";

const connectToDB = async () => {
    let connection: Connection | undefined = await createConnection(config);
    try {
        connection=getConnection()
    } catch(err) {
        console.error(err);
    }
    try{
        if (connection) {
            if(!connection.isConnected) {
                //await connection.connect()
                const connectionn = await createConnection(config);
                await connectionn.runMigrations();
            }
        } else {
            console.log("connection existing");
            
            //await createConnection(config);
            // 
        }
        console.log('Connected!');
        
    } catch (err) {
        console.error(err);
    }
};

export const tryDBConnect = async (cb: ()=> void) => {
    try {
        await connectToDB();
        cb()
    } catch(err) {
        console.error('Connection failed:',err)
    }
} 
