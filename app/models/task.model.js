const sql = require("./db.js");

const Task = function(task) {
  this.title = task.title;
  this.desc = task.desc;
  this.link= task.link;
  this.score= task.score;
};

Task.getAllTasks = (result) => {
  sql.query(`SELECT * FROM task`, (err, res) => {
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