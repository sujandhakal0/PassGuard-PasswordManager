const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
dotenv.config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "passguard";
const port = 3000;
app.use(bodyParser.json())

client.connect();


// get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});


// save password
app.post("/", async (req, res) => {
     const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password)
  res.json({success:true, result: findResult});
});


// delete password by id
app.delete ("/", async (req, res) => {
     const password = req.body
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne (password)
  res.json({success:true, result: findResult});
});




app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});