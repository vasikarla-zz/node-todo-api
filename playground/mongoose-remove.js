const {mongoose, ObjectID} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todos');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((err, res) => {

//     if (err) {
//         console.log("Error " + err);
//     }

// });

//findOneAndRemove
//findByIdAndRemove

Todo.findByIdAndRemove("5bc220c497cbc447a37cee6a").then((todo) => {
    console.log(`Record Removed ${todo}`);
});