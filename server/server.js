const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');
const _ = require('lodash');

var {mongoose} = require('./db/mongoose');
var {TodoModel} = require('./models/todo');
var {User} = require('./models/users');

var app  = express();
app.use(bodyParser.json());

app.post('/todos',(req,res) => {
    var todo = new TodoModel({
        text: req.body.text
    });
    todo.save().then((result) => {
        res.send(result);
    },(e) => {
        res.status(400).send(e);
    })
});

app.get('/todos',(req, res) => {
    TodoModel.find().then((todos) => {
        res.send({todos});
    },(e) => {
        res.status(400).send(e);
    });
});

app.get('/todos/:todoId',(req,res) => {
    var id = req.params.todoId;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    TodoModel.findById(id).then((doc) => {
        if(!doc){
            return res.status(404).send();
        }
        res.send(doc);
    },(e) => {
        res.status(400).send();
    });
});

app.delete('/todos/:todoId',(req,res) => {
    var id = req.params.todoId;
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    TodoModel.findByIdAndRemove(id).then((result) => {
        if(!result){
            return res.status(404).send();
        }
        res.send(result); 
    },(e) => {
        res.status(400).send();
    });
});

app.patch('todos/:todoId',(req,res) => {
    var id = req.params.todoId;
    var body = _.pick(req.body,['text','completed']);
    if(!ObjectId.isValid(id)){
        return res.status(404).send();
    }
    if(_.isBoolean(body.completed) && body.completed){
        body.completedAt = new Date().getTime();
    }
    else{
        body.completed = false;
        body.completedAt = null;
    }
    TodoModel.findByIdAndUpdate(id, {$set : body}, {new: true})
    .then((result) => {
        if(!result) {
            return res.status(404).send();
        }
        res.send(result);
    },(e) => {
        res.status(400).send();
    });
});

//Here are the routes for the Users
app.post('/users',(req,res) => {
    var body = _.pick(req.body,['email','password']);
    var user = new User(body);
    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        res.header('x-auth',token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(4000, () => {
    console.log("Server up on port 4000");
});



