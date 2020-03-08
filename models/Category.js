const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
  title: { 
    type: String, 
    default: '',
    trim: true,
    required: 'Title cannot be blank'
},

  description: { 
      type: String,
      required: 'Title cannot be blank'
    },

    date: {
       type: Date,
       min: '1987-09-28',
    }



},
{ timestamps:true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
