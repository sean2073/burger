// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "zuhd7kvfoealvmmh",
  password: "fg0t4vrjcf012s7m",
  database: "burger_db"
});

  if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  } else {
    connection = mysql.createConnection({
      host: "gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
      user: "zuhd7kvfoealvmmh",
     // password: 'hacktheplanet',
    //  database: 'todoagain_db'
      password: "fg0t4vrjcf012s7m",
      database: "burger_db"
    });
  };
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;