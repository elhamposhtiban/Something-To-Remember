const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpansesSchema = new Schema ({

    title: {

    type: String,
    required: true

    },

    amount: {
        type: Number,
        required: false,
        min: [1, 'it is up to you'],
        max: ["it is up to you"]
      },

    savings: {
        type: Number,     
        min: [1, 'it is up to you'],
        max: ["it is up to you"]
      },

    status: {
        type:Boolean,
        default:"inactive"
    },

    created_at:{
        type:Date,
    },
  
    updated_at: {
        type: Date, 
    },
  
    deleted_at: {
          type: Date, 
    }


})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses