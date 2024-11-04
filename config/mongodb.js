import { MongoClient,Db} from 'mongodb';
// import logger from './logger.js';

const uri = process.env.DB_URI;
const database=process.env.DB_DATABASE

/** @type {MongoClient} */
let client;
/** @type {Db} */
let db;

async function connect() {
    if (!client || !(db instanceof Db)) {
        client = new MongoClient(uri,{writeConcern:1,monitorCommands:true,readPreference:'secondaryPreferred'});
        await client.connect();
        db = client.db(database); 
       console.log('Connected to MongoDB');
    }
}
async function getDb() {
    if (!(db instanceof Db)) {
        await connect(); 
    }
    return db; 
}

async function close() {
    if (client) {
        await client.close();
        client = null;
        db = null;
       console.log('MongoDB connection closed');
    }
}

export { getDb, close };
