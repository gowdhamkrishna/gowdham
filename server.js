
const express = require('express')
const app = express()
const port = 8000
const cors= require('cors');
const { MongoClient, ConnectionCheckOutFailedEvent } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'users';
let collection;
async function Connect() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  collection = db.collection('users');
}
Connect();
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post('/send', async(req, res) => {
  let value=req.body
  console.log(value)
  collection.insertOne(value);
  res.send(value)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})