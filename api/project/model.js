  
const db = require('../../data/dbConfig');

module.exports = {
  getProjects,
  addProject,
};

function getProjects() {
  return db('projects');
}


function addProject(newProject) {
  return db('projects')
    .insert(newProject)
    .then((id) => {
      return newProject;
    });
}
