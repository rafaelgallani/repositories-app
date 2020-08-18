const express = require("express");
const app = express();

const repositories = [];

app.get("/repositories", (_, response) => {
  return response.status(204).json();
});

app.post("/repositories", (request, response) => {
  return response.status(204).json();
});

app.put("/repositories/:id", (request, response) => {
  return response.status(204).json();
});

app.delete("/repositories/:id", (request, response) => {
  return response.status(204).json();
});

app.post("/repositories/:id/like", (request, response) => {
  return response.status(204).json();
});

module.exports = app;
