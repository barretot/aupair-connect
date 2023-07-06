const mongodb = require('mongodb');

require('dotenv').config();

const { MongoClient } = mongodb;
const url = process.env.MONGO_DB_URL;
const dbName = process.env.DB_NAME;
const client = new MongoClient(url, { useNewUrlParser: true });

const makeDb = async () => {
  await client.connect();
  console.log('Connected to database');

  return client.db(dbName);
};

module.exports = makeDb;
