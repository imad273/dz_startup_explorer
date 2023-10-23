const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config();
const Startup = require("./schema/Startup");

app.use(cors({
  origin: "http://localhost:8090"
}))

app.use(express.json());

mongoose.connect(
  `mongodb://emad:${process.env.DB_PASSWORD}@ac-dpo5vm7-shard-00-00.hqxfwkj.mongodb.net:27017,ac-dpo5vm7-shard-00-01.hqxfwkj.mongodb.net:27017,ac-dpo5vm7-shard-00-02.hqxfwkj.mongodb.net:27017/dz_startups_explorer_db?replicaSet=atlas-5uuok6-shard-0&ssl=true&authSource=admin`
).then(
  () => {
    // ready to use
    console.log("DB connected successfully");
  },
  err => {
    /** handle connection error */
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

app.post("/contribute", async (req, res) => {
  console.log(req.body);
  //await Startup.create({ name: req.body.name, location: req.body.location })
  try {
    //new Startup({ name: req.body.name, location: req.body.location }).save()
    await Startup.create({ name: req.body.name, location: req.body.location })
    res.send({ "success": "succ" });
  } catch (err) {
    console.error("something goes wrong");
  }
})