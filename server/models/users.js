const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

var UserSchema = new mongoose.Schema({
    email: {
        required: true,
        trim: true,
        minlength:1,
        type: String,
        unique: true,
        validate: (value) => {
            validator:  (value) => {
                return validator.isEmail(value);
            }
            message : "{VALUE} is not a valid email"
        }
    },
    password: {
        required: true,
        type: String,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required:true
        },
        token: {
            type: String,
            required:true
        }
    }]
})
UserSchema.methods.toJSON = function() {
    var user = this;
    var userObject = user.toObject();

    return _.pick(userObject, ['_id','email']);
}
UserSchema.methods.generateAuthToken = function() {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(),access}, 'secret').toString();

    user.tokens = user.tokens.concat([{access, token}]);
    return user.save().then(() => {
        return token;
    });
};

let User = mongoose.model('User',UserSchema);
module.exports = {User};




//this is used for inserting the data into the database

// let newUser = new User({
//     email: 'abhi@something.com'
// });
// newUser.save().then((result) => {
//     console.log("saved successfully ", result);
// },(err) => {
//     console.log("Unable to save ", err);
// });