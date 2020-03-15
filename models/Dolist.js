const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DolistSchema = new Schema({
    
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
    },

    user: [
      {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "User"
      }
    ],

},
{ timestamps:true});

const Dolist = mongoose.model("Dolist", DolistSchema);

module.exports = Dolist;
