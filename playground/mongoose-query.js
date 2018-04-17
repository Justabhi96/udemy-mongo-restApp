const {mongoose} = require('../server/db/mongoose');
const {TodoModel} = require('../server/models/todo');

var id = '5ad59be5584f6cd815a0ebf6';

TodoModel.find({
    _id: id
}).then((todos) => {
    console.log(todos);
});

TodoModel.findById(id).then((todo) => {
    if(!todo){
        console.log("Id not found");
    }
    console.log(todo);
}).catch((e) => {
    console.log(e);
});