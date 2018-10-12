var {mongoose} = require('./db/mongoose');
var Todo = require('./models/todos');
var User = require('./models/user');
var faker = require('faker');

//Creating a new ToDo
var newTodo = new Todo({
    text: "     Raj     ",
    completed: true,
    completedAt: 12345
});

//Creating a user
var user = new User({
    email: faker.internet.email()
});
user.save().then((res, err) => {
    if (err) {
        console.log("This is error :" + err);
    }
    console.log(JSON.stringify(res, undefined, 2));
});

newTodo.save().then((err, res) => {
    if (err) {
        console.log("This is error :" + err);
    }
    console.log(JSON.stringify(res, undefined, 2));
});



