const express = require("express");
const cors = require("cors");
const router = require("./routes");

// const { uuid } = require("uuidv4");

const app = express();

app.use(router);

module.exports = app;
