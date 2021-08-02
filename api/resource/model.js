// build your `Resource` model here
const db = require('../../data/db-config');
module.exports = {
  getResources,
  addResource,
};

function getResources() {
  return db('resources');
}

function addResource(newResource) {
  return db('resources')
    .insert(newResource)
    .then((id) => {
      return newResource;
    });
}