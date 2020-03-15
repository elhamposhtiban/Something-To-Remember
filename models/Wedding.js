const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const WeddingSchema = new Schema ({

    brideName: {

        type: String,
        required: true
    },

    groomName: {

        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
      },

    totalBudget: {
        type: Float32Array,
        required: false,
        min: [1, 'put any number you want'],
    },

    date: {
        type: Date,
        min: '1987-09-28',
     },
 
     user: [
       {
         // Store ObjectIds in the array
         type: Schema.Types.ObjectId,
         // The ObjectIds will refer to the ids in the Note model
         ref: "user"
       }
     ]

},
{ timestamps:true})

var Wedding = mongoose.model("Wedding", WeddingSchema);

module.exports = Wedding;
