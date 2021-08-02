// build your server here and require it from index.js
const express = require('express');
const tasksRouter = require('./tasks/tasks-router');
const resourceRouter = require('./resource/resource-router');
const projectRouter = require('./project/project-router');

const server = express();

server.use(express.json());

server.use('/api/resources', resourceRouter);
server.use('/api/projects', projectRouter);
server.use('/api/tasks', tasksRouter);

server.use('*',
  (req, res) => {
    res.json({
      api: 'alive'
    });
  });

module.exports = server;