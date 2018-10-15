const {mongoose} = require('../db/mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');

var UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
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

UserSchema.methods.generateAuthToken = function(){
    var user = this;
    var access = 'auth';

    var token = jwt.sign({
        _id: user._id.toHexString(), 
        access: access
    }, 'abc123').toString();

    // user.tokens.push({
    //     access,
    //     tokens
    // });

    user.tokens = user.tokens.concat([{access, token}]);
    user.save().then(() => {
        return token;
    });
};

const User = mongoose.model('Users', UserSchema);

module.exports =  {User};