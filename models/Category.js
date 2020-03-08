const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
  category: { 
    type: String, 
    default: '',
    trim: true,
    required: 'Title cannot be blank'
}


},
{ timestamps:true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
