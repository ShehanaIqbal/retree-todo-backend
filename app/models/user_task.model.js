const sql = require("./db.js");

const UserTask = function(userTask) {
    this.taskId=userTask.taskId;
    this.userId=userTask.userId;
    this.status=userTask.status;
  };
  
  UserTask.updateTask = (userId,taskId,status,result) => {
    sql.query(`UPDATE user_task SET status='${status}' WHERE userId='${userId}' and taskId='${taskId}'`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      
      console.log("found task: ", res);
      result(null, res);
    });
  };
  
  module.exports = UserTask;