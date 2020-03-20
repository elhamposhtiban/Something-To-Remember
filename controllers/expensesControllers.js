const db = require("../models");

// Defining methods for the booksController
module.exports = {

  findAll: function(req, res) {
    console.log("hi i am for expanses find all")
    db.Expenses
      .find()
      .then(dbModel => {

        console.log('dbmodel', dbModel)
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

  // findAllBudget: function(req, res) {
  //   console.log("hi i am for expanses find all")
  //   db.Budget
  //     .find()
  //     .then(dbModel => {

  //       console.log('dbmodel', dbModel)
  //       return(res.json(dbModel))
  //       })
  //     .catch(err => res.status(422).json(err));
  // },

  // createBudget: function(req, res) {
  //   console.log("hi create for expanses i am showing req.body",req.body)

  //   db.Budget
  //     .create(req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // updateBudget: function(req, res) {
  //   db.Expenses
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // removeBudget: function(req, res) {

  //   console.log("hi delete for expenses part")

  //   db.Expenses
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
};
