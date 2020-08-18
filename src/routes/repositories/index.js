const express = require("express");
const cors = require("cors");
const { v4: uuidv4, validate: validateUuid } = require("uuid");

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

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
  const { id } = request.params;
  let repositoryIndex = repositories.findIndex(repo => repo.id === id)
  if (repositoryIndex < 0){
    return response.status(404).json({error: `The repository with id '${id}' was not found.`})
  }
  let repository = repositories[repositoryIndex];

  const { title, url, techs } = request.body; 

  const updatedRepository = repository = {
    ...repository,
    title: title.length && title || repository.title,
    url: url || repository.url,
    techs: techs || repository.techs,
  };

  repositories[repositoryIndex] = updatedRepository;

  return response.status(200).json(updatedRepository);
});

app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repo => repo.id === id)
  if (repositoryIndex < 0){
    return response.status(404).json({error: `The repository with id '${id}' was not found.`})
  }
  repositories.splice(repositoryIndex, 1);
  return response.status(200).json({success: true})
});

app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;
  const repositoryIndex = repositories.findIndex(repo => repo.id === id)
  if (repositoryIndex < 0){
    return response.status(404).json({error: `The repository with id '${id}' was not found.`})
  }
  let repository = repositories[repositoryIndex];

  ++repository.likes;

  return response.status(200).json(repository);
});

module.exports = app;
