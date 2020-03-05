const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DolistSchema = new Schema({
    
  title: { 
    type: String, 
    required: true },

  description: { 
      type: String,
      required: true},



},
{ timestamps:true});

const Dolist = mongoose.model("Dolist", DolistSchema);

module.exports = Book;
