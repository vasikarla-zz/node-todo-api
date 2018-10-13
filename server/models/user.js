const {mongoose} = require('../db/mongoose');
const validator = require('validator');
// {
//     "   ": "vasikarla.raj@gmail.com",
//     "password": "splendor",
//     "tokens": [{
//         access: "auth",
//         token: "splendor-token"
//     }]
// };

const User = mongoose.model('Users', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        uniquie: true,
        validate: {
            validator: validator.isEmail,
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});

module.exports =  User;