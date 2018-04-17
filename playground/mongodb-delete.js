const {MongoClient, ObjectId} = require('mongodb');
//MongoDb module V2
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDb Server");
    //Deletes all matching documents
    db.collection('Todos').deleteMany({
        text: 'Eat Lunch'
    }).then((result) => {
        console.log(result);
    });
    //Deletes the first matching document 
    db.collection('Todos').deleteOne({
        text: 'Eat Lunch'
    }).then((result) => {
        console.log(result);
    });
    //Deletes the first matching document
    //this method returns the deleted document
    db.collection('Todos').findOneAndDelete({
        text: 'Eat Lunch'
    }).then((result) => {
        console.log(result);
    })
    //db.close();
});