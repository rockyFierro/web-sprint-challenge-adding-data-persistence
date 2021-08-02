// build your `/api/projects` router here
const router = require('express').Router();
const Project = require('./model');
 
router.get('/:project_id',
  (req,res,next) => {

  });



//// the pit ///////

  router.use( 
    (err,req,res,next) => { //eslint-disable-line
      res.json({
        customMessage: "\nIt's dangerous to go alone;\n take this chance to visit stackOverflow",
        message: err.message,
        stack: err.stack
      });
  });

module.exports = router;