//this is where we set up the express app and enable API routes.

var express         = require('express');
var bodyParser      = require('body-parser');
var userApi = require('./User-api.js');

var port            = process.env.PORT || 1234;
var app             = express();


// Middleware
app.use(bodyParser.json());

// Routing - Static Pages
app.use(express.static('public'));

// Users API calls
app.post('/api/users', userApi.postUser);
app.get('/api/users', userApi.getUsers);

// Server Ping API call
app.get('/ping', userApi.ping);


// Routing - Default route for AngularJS client app
app.all('/*', function(req, res) {
    res.sendFile('index.html', {root: './public/'});
});

// Start
app.listen(port);
console.log("app is listening on port 1234");
