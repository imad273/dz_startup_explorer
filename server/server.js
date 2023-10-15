const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();

app.use(cors({
  origin: "http://localhost:8090"
}))

mongoose.connect(
  `mongodb://emad:${process.env.DB_PASSWORD}@ac-dpo5vm7-shard-00-00.hqxfwkj.mongodb.net:27017,ac-dpo5vm7-shard-00-01.hqxfwkj.mongodb.net:27017,ac-dpo5vm7-shard-00-02.hqxfwkj.mongodb.net:27017/?replicaSet=atlas-5uuok6-shard-0&ssl=true&authSource=admin`
).then(
  () => {
    // ready to use
    console.log("DB connected successfully");
  },
  err => {
    /** handle initial connection error */
    console.error(err);
  }
);

app.listen(process.env.PORT, () => {
  console.log(`running on port ${process.env.PORT}`);
})

app.get("/startups", (req, res) => {
  res.send([
    {
      name: "yassir"
    },
    {
      name: "krelo"
    },
  ])
})