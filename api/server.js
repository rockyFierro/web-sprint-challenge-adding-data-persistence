// build your server here and require it from index.js
const express = require('express');
const tasksRouter = require('./task/router');
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');

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