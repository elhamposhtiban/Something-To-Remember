const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll: function(req, res) {
    console.log("///wedding find All/////")
    db.Wedding
      .find()
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Wedding
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("*******wedding req.body is*********  :",req.body)

    db.Wedding
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Wedding
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .populate("User")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  remove: function(req, res) {

    console.log("hi delete for Wedding part")

    db.Wedding
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};


