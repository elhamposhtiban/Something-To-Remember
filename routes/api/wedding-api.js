const router = require("express").Router();
const weddingController = require ("../../controllers/weddingController");


// Matches with "/api/wedding"

router
.route("/")
.get(weddingController.findAll)
.post(weddingController.create);


// Matches with "/api/wedding/:id"
router
.route("/:id")
.get(weddingController.findById)
.put(weddingController.update)
.delete(weddingController.remove);

// Matches with "/api/wedding/user/:id"
router
.route("/user/:id")
.get(weddingController.findByUserId);

module.exports = router