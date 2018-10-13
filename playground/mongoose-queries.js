const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');

var id = "5bc153e9d7bddb23201a3e75";
console.log(Todo);

Todo.find({_id: id}).then((todos) => {
    console.log(JSON.stringify(todos, undefined, 2));
});

Todo.findOne({_id: id}).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});

Todo.findById(id).then((todo) => {
    console.log(JSON.stringify(todo, undefined, 2));
});