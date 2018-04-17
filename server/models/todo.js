var mongoose = require('mongoose');


let TodoModel = mongoose.model('Todo',{
    text:{
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed:{
        type: Boolean,
        default: false
    },
    completedAt:{
        type: Number,
        default: null
    }
});

module.exports = {TodoModel};





//this is used for inserting the data into the database

// let newTodo = new TodoModel({
//     text: 'Do Something'
// });

// newTodo.save().then((result) => {
//     console.log("Saved successfully ", result);
// },(err) => {
//     console.log("Unable to save ",err);
// });