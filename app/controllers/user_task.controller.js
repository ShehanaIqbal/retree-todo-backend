const UserTask = require("../models/user_task.model.js");

exports.updateTask = (req, res) => {
    UserTask.updateTask(req.params.userId,req.params.taskId,req.params.status,(err, data) => {
      if (err) {
          res.status(500).send({
              message: "Error updating the task"
          });
      } else res.send(data);
    });
  };