module.exports = app => {
    const task = require("../controllers/task.controller.js");
  
    // Retrieve a single Customer with phone and password
    app.get("/task", task.getAllTasks);

  };
  