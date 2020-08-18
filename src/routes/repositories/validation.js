const express = require("express");
const { validate: validateUuid } = require("uuid");
const app = express();

addRepositoryToRequest = (repositories) => {
  return app.use("/repositories/:id", (request, response, next) => {
    const { id } = request.params;
    let repositoryIndex = repositories.findIndex(repo => repo.id === id)
    if (repositoryIndex < 0){
      return response.status(400).json({error: `The repository with id '${id}' was not found.`})
    }
    let addedProperties = {
      repository: repositories[repositoryIndex],
      repositoryIndex,
    };
    Object.assign(request, addedProperties);
    return next();
  });
}

validateRepositoriesUuid = () => {
  return app.use("/repositories/:id", (request, response, next) => {
    const { id } = request.params;
    if (!validateUuid(id)){
      return response.status(400).json({error: `The specified value is not a valid UUID. Value: '${id}'.`})
    }
    return next();
  });
}

module.exports = (repositories) => {
  return [
    validateRepositoriesUuid(),
    addRepositoryToRequest(repositories),
  ]
}