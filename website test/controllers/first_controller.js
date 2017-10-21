const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('../models/t_models');

const urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//const connectionString = 'mongodb://test:test@ds149711.mlab.com:49711/test_manos';
const connectionString_2 = 'mongodb://127.0.0.1:27017/manos_test';

mongoose.connect(connectionString_2);
module.exports = function(app) {

app.get('/', function(req, res) {
    Todo.find({}, function(err, data) {
      if (err) throw err;
      res.render('index', {
        entries: data
      });
    });
  });

app.post('/', urlencodedParser, function(req, res) {
    let newTodo = new Todo(req.body);
    newTodo.save(function(err, data) {
      if (err) throw err;
      console.log("ok it is saved");
      res.json(data);
    });
  });

app.delete('/:id', function(req, res) {
    Todo.findByIdAndRemove({_id: req.params.id}, function(err, data) {
      if (err) throw err;
      console.log(data);
      res.json(data);
    });
  });

}
