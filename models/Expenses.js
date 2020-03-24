const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpansesSchema = new Schema ({

    itemName: {
    type: String,
    required: true
    },
    
    amount: {
        type: Number,
        required: false,
        default:null,
        min: [1, 'put any number you want'],
    },

    note: {
        type: String,
        required: true
    },

    category: {
      type: String
    },
    
    user_id: {
      type: String,
      required : true
    }

}, { timestamps:true})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses
