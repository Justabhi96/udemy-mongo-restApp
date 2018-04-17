var {ObjectId} = require('mongodb');

const {mongoose} = require('../server/db/mongoose');
const {TodoModel} = require('../server/models/todo');
const {User} = require('../server/models/users');

// TodoModel.remove({}).then((result) => {
//     console.log(result);
// },(e) => {
//     console.log(e);
// });

// TodoModel.findOneAndRemove({
//     text: 'something'
// }).then((result) => {
//     console.log(result);
// },(e) => {
//     console.log(e);
// });

TodoModel.findByIdAndRemove('5ad59be5584f6cd815a0ebf6').then((result) => {
    console.log(result);
},(e) => {
    console.log(e);
});

