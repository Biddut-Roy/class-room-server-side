const express = require('express');
require('dotenv').config();
const app = express()
const cors = require('cors')
const port = process.env.PORT || 5000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

// middleware
app.use(cors({
    origin: [
        'http://localhost:5173',
    ]
}));
app.use(express.json())







const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@cluster0.malve12.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {

    // await client.close();
  }
}
run().catch(console.dir);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})