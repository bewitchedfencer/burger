var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var express = require('express');

var app = express();

var port = process.env.PORT||3000;

//connect to front end public files
app.use(express.static("public"));

//body parser set up
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//set up handlebars
var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//connecting to routers
var routes = require('./controllers/burgers_controller.js');
app.use(routes);

app.listen(port, function(error){
    if(error) throw error;
    console.log(`Listening at port ${port}`);
});