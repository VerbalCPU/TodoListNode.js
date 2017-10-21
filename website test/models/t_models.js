const mongoose = require('mongoose');

const tooSchema = new mongoose.Schema({
  item : {type : String},
  //id   : {type : objectId}
});

module.exports = mongoose.model('Todo',tooSchema,'Todo');

// third argument is the name of the collection,otherwise
// without it we can still pass the model with the name todo
// but the mongoose adds an "s" at the end of the collection
// and also lowercase everything. i.e Todo -> todos.
