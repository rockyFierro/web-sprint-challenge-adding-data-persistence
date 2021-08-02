// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
  getTasks,
  addTask,
  getTasksByProjectId
};

function getTasks() {
  return db('tasks')
    .join('projects', 'tasks.projectId', 'projects.id')
    .select(
      'tasks.id',
      { taskDesc: 'tasks.description' },
      'tasks.notes',
      'tasks.completed',
      { projName: 'projects.name' },
      { projDesc: 'projects.description' }
    );
}

function addTask(newTask) {
  return db('tasks')
    .insert(newTask)
    .then((id) => {
      return newTask;
    });
}

function getTasksByProjectId(id) {
  return db('tasks').where({ 'tasks.projectId': id });
}