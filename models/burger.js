//import the orm with require
var orm = require('../config/orm.js');
//call the ORM functions "using burger specific input for the ORM."
var buger = {
    selectBurgers:function(cb){
        orm.selectAll('burger', function(result){
            cb(result);
        });
    },
    createBurger:function(burgerName, cb){
        orm.insertOne('burger', 'burger_name', burgerName, function(result){
            cb(result);
        });
    },
    eatBurger:function(id, cb){
        orm.updateOne('devoured', false, 'id', id, function(result){
            cb(result);
        });
    }
}
//export at the end of the file
module.exports=burger;