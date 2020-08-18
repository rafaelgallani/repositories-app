const express = require("express");
const repositoriesRoutes = require("./repositories");
const app = express();

app.use(repositoriesRoutes);
module.exports = app;