//require the connection.js file
var connection = require('./connection.js');
//set up three functions called:
var orm = {
//selectAll() function that will pull all of the results in the database
selectAll:function(tableInput, cb){
    var queryString=`SELECT * FROM ${tableInput} ASC BY id`;
    connection.query(queryString, function(error, data){
        if(error) throw error;
        cb(data);
    });
},
//insertOne()
insertOne:function(tableInput, col, val, cb){
    var queryString = `INSERT INTO ${tableInput}(${col})VALUES(${val})`;
    connection.query(queryString, vals, function(error, data){
        if(error) throw error;
        cb(data);
    });
},
//updateOne() function that will update the Boolean value
updateOne:function(col, val, id_col, id, cb){
    var queryString = `SET {${col}:${val}} WHERE ${id_col}=${id}`;
    connection.query(queryString, function(error, data){
        if(error) throw error;
        cb(data);
    });
}


}

//exported in module.exports
module.exports=orm;