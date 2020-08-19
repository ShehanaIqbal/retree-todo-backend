const sql = require("./db.js");

const Task = function(task) {
  this.userId = user.userId;
  this.title = task.title;
  this.desc = task.desc;
  this.link= task.link;
  this.score= task.score;
  this.status=task.status;
};

Task.getAllTasks = (userId,result) => {
  sql.query(`SELECT * FROM task INNER JOIN user_task ON task.Id=user_task.taskId WHERE userId='${userId}' AND isExpired=0`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    
    console.log("found task: ", res);
    result(null, res);
  });
};

module.exports = Task;