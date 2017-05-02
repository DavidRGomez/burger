var connection = require("./connection.js");


  var arr = [];
  for (i in num) {
    arr.push("?");
  }
  return arr.toString();
}

var orm = {

 


  selectAll: function(table, cb) {
    connection.query("SELECT * FROM ??;", [table], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },






  
  insertOne: function(table, cols, info, cb) {
    var count = marks(cols.length);
    connection.query("INSERT INTO ?? (" + count + ") VALUES (" + count + ");", [table, cols.toString(), info.toString()], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  },

  


  updateOne: function(table, col1, val, col2, id, cb) {
    connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ?;", [table, col1, val, col2, parseInt(id)], (err, data) => {
      if (err) throw err;
      cb(data);
    });
  }
};

module.exports = orm;
