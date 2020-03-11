const router = require ("express").Router();
const dolistRoutes = require ("./dolist-api");

var passport = require("passport");
// Dolist routes

router.use("/dolist", dolistRoutes);

module.exports = router