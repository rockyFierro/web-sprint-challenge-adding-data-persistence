// build your server here and require it from index.js
const express = require('express');
const tasksRouter = require('./tasks/tasks-router');
const resourceRouter = require('./resource/resource-router');
const projectRouter = require('./project/project-router');

const server = express();

server.use(express.json());

server.use('/api/recipes', tasksRouter);
server.use('/api/resource', resourceRouter);
server.use('/api/project', projectRouter);

server.use('*',
  (req, res) => {
    res.json({
      api: 'alive'
    });
  });

module.exports = server;