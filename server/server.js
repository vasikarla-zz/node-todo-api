var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('ToDo', {
    text: {
        type: String
    },

    completed: {
        type: Boolean
    },

    completedAt: {
        type: Number
    }
});