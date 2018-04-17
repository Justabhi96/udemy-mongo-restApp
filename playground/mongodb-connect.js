const MongoClient = require('mongodb').MongoClient;
//MongoDb module V2
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err) {
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to MongoDb Server");
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // },(err, result) => {
    //     if(err) {
    //         return console.log('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });
    db.collection('Users').insertOne({
        name: 'Abhishek Kushwaha',
        completed: false
    },(err, result) => {
        if(err) {
            return console.log('unable to insert todo', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});

//For MongoDB module V3 we have to chage the code a little bit to get it working.
//there are 3 changes -: 
//1)- In the callback argument of MongoDbClient.connect()
//2)- We cannot directly acces the db in V3 but we have to get the instance of
//      the database and then we can work with it
//3)- To close the connection with the database we have to close it with 
//      client.close() insetead of db.close()
// Down below is the correct code for the V3


// MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
//     if(err) {
//         return console.log("Unable to connect to MongoDB server");
//     }
//     console.log("Connected to MongoDb Server");
//     const db = client.db('TodoApp');
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     },(err, result) => {
//         if(err) {
//             return console.log('unable to insert todo', err);
//         }
//         console.log(JSON.stringify(result.ops, undefined, 2));
//     });
//     client.close();
// });