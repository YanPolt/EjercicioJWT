const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://juanpablo123:juanpablo@cluster0.ollwq.mongodb.net/test";
const database = "ejerciciojwt";

let db;

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connect = async (dbName = database) => {
  const conn = await client.connect();
  db = conn.db(dbName);
  console.log(" << Database connected >> ");
};

const getDbRef = () => db || new Error("Connection error");

module.exports = { connect, getDbRef };
