require(`dotenv`).config();
const express = require(`express`);
const bodyParser = require(`body-parser`);
const axios = require(`axios`);
var cors = require("cors");

const https = require("https");
const fs = require("fs");
const { createSessionforSmpp } = require("./helpers/smppConf");

// const { postFromTelegram } = require('./src/routes/route');

const app = express();
app.use(bodyParser.json());

app.use(cors());

const smmp = require('./routes/smmp')

app.use(smmp)
app.post("/", async (req, res) => {
  res.send("Server UP!");
});
// createLoanRequest
app.listen(process.env.PORT || 5000, async () => {
  console.log("listening on port", 5000 || process.env.PORT);
  //   await init();
});
