const Task = require("../models/task.model.js");

exports.getAllTasks = (req, res) => {
  Task.getAllTasks(req.params.userId,(err, data) => {
    if (err) {
        res.status(500).send({
            message: "Error retrieving all tasks"
        });
    } else res.send(data);
  });
};
