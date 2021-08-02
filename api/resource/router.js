// build your `/api/resources` router here
// build your `/api/projects` router here
const router = require('express').Router();
const Resource = require('./model');
 
router.get('/', (req, res) => {
  Resource.getResources()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to get resources' });
    });
});

router.post('/', (req, res) => {
  const newResource = req.body;

  Resource.addResource(newResource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: 'Failed to create new resource' });
    });
});

module.exports = router;