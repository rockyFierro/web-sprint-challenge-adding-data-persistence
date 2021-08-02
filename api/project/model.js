  
const db = require('../../data/dbConfig');


const getProjects = () => db('projects');

const addProject = async (project) => {
  return await db('projects').insert(project);
};

module.exports = {
  getProjects,
  addProject,
};