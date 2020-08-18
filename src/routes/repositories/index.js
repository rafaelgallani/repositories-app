const express = require("express");
const cors = require("cors");
const validation = require("./validation");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.use(validation(repositories))

app.get("/repositories", (_, response) => {
  return response.status(200).json(repositories);
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;
  const repository = {
    title, 
    url,
    techs,
    id: uuidv4(),
    likes: 0,
  };
  repositories.push(repository);
  return response.status(201).json(repository);
});

app.put("/repositories/:id", (request, response) => {
  let repository = request.repository;

  const { title, url, techs } = request.body; 

  const updatedRepository = repository = {
    ...repository,
    title: title && title.length ? title : repository.title,
    url: url || repository.url,
    techs: techs || repository.techs,
  };

  repositories[request.repositoryIndex] = updatedRepository;

  return response.status(200).json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  repositories.splice(request.repositoryIndex, 1);
  return response.status(204).json({success: true})
});

app.post("/repositories/:id/like", (request, response) => {
  let repository = request.repository;

  ++repository.likes;

  return response.status(200).json(repository);
});

module.exports = app;
