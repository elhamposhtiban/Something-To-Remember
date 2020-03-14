const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    
category: { 
    type: String, 
    default: '',
    trim: true,
    required: 'Title cannot be blank'
},

expenses: [
  {
    // Store ObjectIds in the array
    type: Schema.Types.ObjectId,
    // The ObjectIds will refer to the ids in the Note model
    ref: "Expenses"
  }
]

},
{ timestamps:true});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
