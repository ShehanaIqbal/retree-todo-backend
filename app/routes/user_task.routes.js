module.exports = app => {

    const user_task = require("../controllers/user_task.controller.js");
  
    app.get("/updatestatus/:userId/:taskId/:status", user_task.updateTask);

  };
