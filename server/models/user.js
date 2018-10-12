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