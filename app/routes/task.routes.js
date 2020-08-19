module.exports = app => {

    const task = require("../controllers/task.controller.js");
  
    app.get("/task/:userId", task.getAllTasks);

  };
