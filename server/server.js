var {mongoose, ObjectId} = require('./db/mongoose');
var Todo = require('./models/todos');
var User = require('./models/user');
var faker = require('faker');

var express = require('express');
var bodyParser = require('body-parser');

//Init
var app = express();

//Listen
app.listen('3000', () => {
    console.log("Started on port 3000");
});

//Middleware
app.use(bodyParser.json());

//CREATE a Todo - POST
app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((ret, err) => {
        if (err) {
            res.status(400).send("Error");
        }
        res.send(JSON.stringify(ret, undefined, 2));
    });
    console.log(req.body);    
});

//CREATE USERS
app.post('/users', (req, res) => {
    var user = new User({
        email: req.body.email
    });
    user.save().then((ret, err) => {
        if (err) {
            res.status(400).send("Error");
        }
        res.send(JSON.stringify(ret, undefined, 2));
    });
    console.log(req.body);    
});

//FETCH USERS - GET
app.get('/users', (req, res) => {
    
    User.find().then((users) => {
        res.send({users});    
    }, (e) => {
        res.body.status(400).send("Error");
    });

});

//FETCH - GET
app.get('/todos', (req, res) => {
    
    Todo.find().then((todos) => {
        res.send({todos});    
    }, (e) => {
        res.body.status(400).send("Error");
    });

});


app.get('/todos/:id', (req, res) => {

    var id = req.params.id;
    Todo.find({_id: id}).then((todos) => {
        console.log(JSON.stringify(todos, undefined, 2));
    });
    res.send(Todo);
    res.send(req.params.id);
});

module.exports = {app};