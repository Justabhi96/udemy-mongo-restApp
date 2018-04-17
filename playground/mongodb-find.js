const {MongoClient, ObjectId} = require('mongodb');
//MongoDb module V2
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDb Server");
    db.collection('Todos').find({
        //completed: false
        _id : new ObjectId("5ad47446326a1c3218f83129")
    }).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 2));
    },(err) => {
        console.log("Unable to fetch the data", err);
    });
    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    },(err) => {
        console.log("Unable to fetch the data", err);
    });
    //db.close();
});