// build your server here and require it from index.js
const express = require('express');
const helmet = require('helmet');

const tasksRouter = require('./task/router');
const resourceRouter = require('./resource/router');
const projectRouter = require('./project/router');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/tasks', tasksRouter);
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

server.use('*',
  (req, res) => {
    res.json({
      api: 'alive'
    });
  });

module.exports = server;