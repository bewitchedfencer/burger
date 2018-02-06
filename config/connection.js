//set up the connection with mysql and export
var mysql = require('mysql');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : "",
  database : 'burgers_db'
});
 
connection.connect(function(error, result){
    if(error) throw error;

});
 
module.exports=connection;