//set up the connection with mysql and export
var mysql = require('mysql');
var connection

if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
 mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : "",
  database : 'burgers_db'
});
};
connection.connect(function(error, result){
    if(error) throw error;

});
 
module.exports=connection;