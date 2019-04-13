var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: {type:String},
  image: { type: String },
  link: { type: String }
});

var Book = mongoose.model("Book", bookSchema);

module.exports = Book;
