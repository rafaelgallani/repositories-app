const express = require("express");
const app = express();

addRepositoryToRequest = (repositories) => {
  return app.use("/repositories/:id", (request, response, next) => {
    const { id } = request.params;
    let repositoryIndex = repositories.findIndex(repo => repo.id === id)
    if (repositoryIndex < 0){
      return response.status(404).json({error: `The repository with id '${id}' was not found.`})
    }
    let addedProperties = {
      repository: repositories[repositoryIndex],
      repositoryIndex,
    };
    Object.assign(request, addedProperties);
    return next();
  });
}

module.exports = (repositories) => {
  return addRepositoryToRequest(repositories)
}