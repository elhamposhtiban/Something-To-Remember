const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const UserSchema = new Schema ({

    firstname: {

        type: String,
    },

    lastname: {

        type: String,
    },

    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
      },

    passwordHash: {

        type: String,
        trim: true,
        required: "Password is Required",
        validate: [
          function(input) {
            return input.length >= 6;
          },
          "Password should be longer."
        ]
    },

    passwordSalt: {
        
        type:String
    },

    status: {

        type:Boolean,  
        default:"inactive"
    }


})

var User = mongoose.model("User", UserSchema);

module.exports = User;
