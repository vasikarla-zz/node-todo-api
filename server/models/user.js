var {mongoose} = require('../db/mongoose');

const User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports =  User;

// //Creating a user
// var user = new User({
//     email: faker.internet.email()
// });
// user.save().then((res, err) => {
//     if (err) {
//         console.log("This is error :" + err);
//     }
//     console.log(JSON.stringify(res, undefined, 2));
// });

