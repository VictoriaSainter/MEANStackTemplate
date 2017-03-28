var mongo = require('mongoskin');

//name of database
var db = mongo.db('mongodb://localhost:27017/MEANStackTemplate', {native_parser:true});
db.bind('users');

//this is the code to create a 'get' call to find all the list of users in the Mongo db
exports.getUsers = function(req, res) {
    db.users.find().toArray(function(err, users) {
        if (err) {
            res.status(500).send(err);
        }
        else {
            res.status(200).send(users);
        }
    });
};

//this is the code to create a 'post' call to update the mongodb with a new user
exports.postUser = function(req, res) {

    var requestType = req.get('Content-Type');

    if (requestType == "application/json") {
        db.users.insert(req.body, function(err, response){
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(201).send(response.ops[0]);
            }
        });
    }
    else {
        res.status(400).send("This post call expects a content-type of application/json");
    }
};

exports.ping = function(req,res){
    res.status(200).send("Server is up and running!");
};
