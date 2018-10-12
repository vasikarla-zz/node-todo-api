
var {mongoose} = require('../db/mongoose');

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

module.exports = Todo;


// //Creating a new ToDo
// var newTodo = new Todo({
//     text: "     Raj     ",
//     completed: true,
//     completedAt: 12345
// });

// newTodo.save().then((err, res) => {
//     if (err) {
//         console.log("This is error :" + err);
//     }
//     console.log(JSON.stringify(res, undefined, 2));
// });
