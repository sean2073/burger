// Set up MySQL connection.
var mysql = require("mysql");

var connection;
 

  if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      //host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      host:'localhost',
      user: 'root',
      //user: "zuhd7kvfoealvmmh",
      password: 'hacktheplanet',
      database: 'todoagain_db'
      //password: "fg0t4vrjcf012s7m",
      //database: "burger_db"
    });
  };
// Make connection.
connection.connect();
 

// Export connection for our ORM to use.
module.exports = connection;