const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExpansesSchema = new Schema ({

    itemName: {
    type: String,
    required: true
    },
    
    actualAmount: {
        type: Number,
        required: false,
        default:null,
        min: [1, 'put any number you want'],
    },

    estimateAmount: {
      type: Number,
      required: false,
      default:null,
      min: [1, 'put any number you want'],
  },

    note: {
        type: String,
        required: true
    },
    
    currency: {
      type:Number,
      default:"inactive"
  },

    status: {
        type:Boolean,
        default:"inactive"
    },

    user: [
      {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "User"
      }
    ],

}, { timestamps:true})

const Expenses = mongoose.model("Expenses", ExpansesSchema);

module.exports = Expenses