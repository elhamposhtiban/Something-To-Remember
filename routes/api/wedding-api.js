const router = require("express").Router();
const dolistController = require ("../../controllers/weddingController");


// Matches with "/api/wedding"

router
.route("/")
.get(dolistController.findAll)
.post(dolistController.create);


// Matches with "/api/wedding/:id"
router
.route("/:id")
.get(dolistController.findById)
.put(dolistController.update)
.delete(dolistController.remove);

module.exports = router