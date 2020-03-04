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
        min: [1, 'put any number you want'],
    },

    savings: {
        type: Number,     
        min: [0, 'it is up to you'],
    },

    status: {
        type:Boolean,
        default:"inactive"
    },

    timestamps: {

        type:Date
    },
  
    deleted_at: {
          type: Date, 
    }
})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses