const {mongoose, ObjectID} = require('./../server/db/mongoose');
const Todo = require('./../server/models/todos');
const {User} = require('./../server/models/user');


Todo.remove({}).then((res) => {

});