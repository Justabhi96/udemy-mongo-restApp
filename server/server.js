var express = require('express');
var bodyParser = require('body-parser');

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

app.listen(4000, () => {
    console.log("Server up on port 4000");
});



