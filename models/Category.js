const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
category: { 
    type: String, 
    default: '',
    trim: true,
    required: 'Title cannot be blank'
},

budget: {
  type: Number,
  required: false,
  min: [1, 'put any number you want'],
},

wedding: [
  {
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Wedding"
  }
]


},
{ timestamps:true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
