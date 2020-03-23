const router = require("express").Router();
const expensesController = require ("../../controllers/expensesControllers");


// Matches with "/api/expenses"

router
.route("/")
.get(expensesController.findAll)
.post(expensesController.create);


// Matches with "/api/expenses/:id"
router
.route("/:id")
.get(expensesController.findById)
.put(expensesController.update)
.delete(expensesController.remove);

// Matches with "/api/expenses/user/:id"
router
.route("/user/:id")
.get(expensesController.findByUserId);

module.exports = router