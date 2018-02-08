//require the connection.js file
var connection = require('./connection.js');
//set up three functions called:
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
};
var orm = {
//selectAll() function that will pull all of the results in the database
selectAll:function(tableInput, cb){
    var queryString=`SELECT * FROM ${tableInput} ORDER BY id ASC`;
    connection.query(queryString, function(error, data){
        if(error) throw error;
        cb(data);
    });
},
//insertOne()
insertOne:function(tableInput, col, val, cb){
    var queryString = `INSERT INTO ${tableInput}(${col.toString()})VALUES(?)`;
    connection.query(queryString, [val], function(error, data){
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