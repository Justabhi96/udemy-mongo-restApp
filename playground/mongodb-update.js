const {MongoClient, ObjectId} = require('mongodb');
//MongoDb module V2
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDb Server");
    db.collection('Todos').findOneAndUpdate({
        _id:new ObjectId('5ad4788afd346735168a2674')
    },{
        $set: {
            completed: false
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    },(err) => {
        console.log('Unable to update the document ',err);
    });
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectId('5ad49a6ffd346735168a297b')
    },{
        $set: {
            name: 'Shubham'
        },
        $inc: {
            age: 1
        }
    },{
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    },(err) => {
        console.log('Unable to update the document ',err);
    });
    //db.close();
});