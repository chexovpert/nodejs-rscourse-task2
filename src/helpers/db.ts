import {config} from "../common/ormconfig"
import {createConnection, getConnection} from "typeorm";

const connectToDB = async () => {
    let connection;
    try {
        connection=getConnection()
    } catch(err) {
        console.error(err);
    }
    try{
        if (connection) {
            if(connection.isConnected) await connection.connect()
        } else {
            await createConnection(config);
            // const connectionn = await createConnection(config);
            // await connectionn.runMigrations();
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
