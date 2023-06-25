import * as mongo from "mongodb";
import { NextApiRequest } from "next";
const MONGO_URI = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`;

interface Database {
  client?: mongo.MongoClient;
}

export interface DatabaseRequest extends NextApiRequest {
  db: Database;
}

const connectDB = (async function () {
  console.log(`Start connecting to mongodb...${MONGO_URI}`);
  const mongoClient: mongo.MongoClient = new mongo.MongoClient(
    "mongocb://localhost:27017/jay_db",
    {
      connectTimeoutMS: 5000,
    }
  );
  const client = await mongoClient.connect();
  const database: mongo.Db = client.db(process.env.MONGO_DATABASE);
  // await createIndexes(database); // optional
  return {
    client,
  };
})();

// ("mongocb://localhost:27017/jay_db");
