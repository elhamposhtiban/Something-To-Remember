const router = require("express").Router();
const dolistController = require ("../../controllers/dolistController");


// Matches with "/api/dolist"

router
.route("/")
.get(dolistController.findAll)
.post(dolistController.create);


// Matches with "/api/dolist/:id"
router
.route("/:id")
.get(dolistController.findById)
.put(dolistController.update)
.delete(dolistController.remove);


// Matches with "/api/dolist/user/:id"
router
.route("/user/:id")
.get(dolistController.findByUserId);

module.exports = router