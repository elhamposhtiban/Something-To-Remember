const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll: function(req, res) {

    // console.log("i am reading req for you ")
    db.Dolist
      .find()
      .then(dbModel => {

        // console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Dolist
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("hey this is your req.body",req.body)
    db.Dolist
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    console.log("i am updating something for you")
    console.log(`id: ${req.params.id}`)
    console.log(`request body, ${req.body}`)
    console.log(req.body)
    db.Dolist
      .findOneAndUpdate({_id: req.params.id }, req.body)
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {

    console.log("i am deleting something for you")

    db.Dolist
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
