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
        type: Number,
        required: true,
        min: [1, 'put any number you want'],
    },

    date: {
        type: Date,
        min: '1987-09-28',
     },

     user_id: {
        type: String,
        required : true
     }

},
{ timestamps:true})

var Wedding = mongoose.model("Wedding", WeddingSchema);

module.exports = Wedding;
