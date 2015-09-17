// BASE SETUP
//                      TYPE IN TERMINAL "node serverjs"
//                         FOR DEBUGGING "node-debug serverjs"
// =============================================================================

var modules_path="../node_modules/";
var express = require(modules_path + 'express');
var bodyParser = require(modules_path + 'body-parser');
var Sequelize = require(modules_path + 'sequelize');



var port = process.env.PORT || 8085;


var app = express();
var env = app.get('env') == 'development' ? 'dev' : app.get('env');
var config = require('./config/database.json')[env];
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

var DataTypes = require('sequelize');
var password = config.password ? config.password : null;

// initialize database connection
sequelize = new Sequelize(
    config.database,
    config.user,
    config.password, {
        dialect: config.driver,
        logging: console.log,
        define: {
            timestamps: false
        }
    }
);

// MODELS
// =============================================================================
require("./app/module-name-1/module-name-1_model.js")(DataTypes);



router = express.Router();


//ROUTES ABOVE MIDDLEWARE



// MIDDLEWARE to use for all requests and intercepting the below routes and leaving the above routes
router.use(function(req, res, next) {


});

//ROUTES BELOW MIDDLEWARE
require("./app/module-name-1/module-name-1_route.js");


//ACCESS ORGIN
// =============================================================================
app.use(function(req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,x-access-token');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// REGISTER OUR ROUTES
// =============================================================================
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);