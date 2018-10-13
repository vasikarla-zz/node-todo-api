var {mongoose} = require('./db/mongoose');
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

//CREATE - POST
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

//FETCH - GET
app.get('/todos', (req, res) => {
    
    Todo.find().then((todos) => {
        res.send({todos});    
    }, (e) => {
        res.body.status(400).send("Error");
    });

});

module.exports = {app};