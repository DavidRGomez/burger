var mysql = require('mysql');

var connection = mysql.createConnection({ 
    port: 3306, 
    host: "localhost", 
    user: "root", 
    password: "BKmXejn59u@zzJ%h",
    datbase: "burgers_db"
});

connection.connect(function(err) { 
    if (err) { 
        console.log("error connecting: " + err.stack); 
            return;
    }
}); 

//this is how we acces the connection object
module.exports = connection; 
