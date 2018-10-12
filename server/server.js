var mongoose = require('mongoose');
var faker = require('faker');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('ToDos', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },

    completed: {
        type: Boolean,
        default: false    
    },

    completedAt: {
        type: Number,
        default: null        
    }
});

const User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

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



