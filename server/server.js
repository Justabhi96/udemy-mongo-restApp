var express = require('express');
var bodyParser = require('body-parser');
var {ObjectId} = require('mongodb');

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
app.listen(4000, () => {
    console.log("Server up on port 4000");
});



