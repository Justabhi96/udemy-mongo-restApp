var mongoose = require('mongoose');

let User = mongoose.model('User',{
    email: {
        required: true,
        trim: true,
        minlength:1,
        type: String
    }
});
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