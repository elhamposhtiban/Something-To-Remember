const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll: function(req, res) {
    console.log("hi i am for expanses find all")
    db.Expenses
      .find()
      .then(dbModel => {

        // console.log('dbmodel', dbModel)
        return(res.json(dbModel))
        })
      .catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    db.Expenses
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  findByUserId: function(req, res) {
    
    console.log("this is req.params.id",req.params.id )
    db.Expenses
      .find({user_id: req.params.id})
      .then(dbModel => {res.json(dbModel)
      console.log("this is model for user-id expense",dbModel )})
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) {
    console.log("hi create for expanses i am showing req.body",req.body)

    db.Expenses
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  
  update: function(req, res) {
    db.Expenses
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {

    console.log("hi delete for expenses part")

    db.Expenses
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

};
