const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll: function(req, res) {
    console.log("hi i am for expanses find all")
    db.Wedding
      .find()
      .populate("user")
      .then(dbModel => {

        console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Wedding
      .findById(req.params.id)
      .populate("user")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("wedding req.body :",req.body)
    db.Wedding
      .create(req.body)
      .then(function(dbNote) {

        return db.Wedding.findOneAndUpdate({ _id: req.params.id }, { user: dbuser._id }, { new: true });
      })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  update: function(req, res) {
    db.Wedding
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .populate("user")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {

    console.log("hi delete for Wedding part")

    db.Wedding
      .findById({ _id: req.params.id })
      .populate("user")
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
