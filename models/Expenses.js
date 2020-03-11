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
        min: [1, 'put any number you want'],
    },

    savings: {
        type: Number,     
        min: [0, 'it is up to you'],
    },

    note: {
        type: String,
        required: true
    },

    status: {
        type:Boolean,
        default:"inactive"
    },

    category: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Category"
        }
      ],

      wedding: [
        {
          // Store ObjectIds in the array
          type: Schema.Types.ObjectId,
          // The ObjectIds will refer to the ids in the Note model
          ref: "Wedding"
        }
      ]

}, { timestamps:true})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses