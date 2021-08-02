// build your `/api/projects` router here
const router = require('express').Router();
const Task = require('./model');
 
router.get('/', (req, res) => {
  Task.getTasks()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});

router.get('/:id/tasks', (req, res) => {
  const { id } = req.params;

  Task.getTasksByProjectId(id)
    .then((tasks) => {
      if (tasks.length) {
        res.json(tasks);
      } else {
        res
          .status(404)
          .json({ message: 'Could not find tasks for given project' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get tasks' });
    });
});


router.post('/tasks', (req, res) => {
  const newTask = req.body;

  Task.addTask(newTask)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new task' });
    });
});