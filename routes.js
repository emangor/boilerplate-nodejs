// talk back to parent (app.js) to get reference to express/app
express = module.parent.exports.express;
app = module.parent.exports.app;

var router = express.Router();  // init our express 4 router
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(router);  // tell the app this is the router we are using

// init our dependencies (controllers, security, and utils ONLY)
var healthcheckController = require('./controllers/controller-healthcheck');
var userController = require('./controllers/controller-user');
 
// healthcheck
router.get('/healthcheck', healthcheckController.healthcheck);

// userController routes
router.get('/user/:username', userController.getUser);