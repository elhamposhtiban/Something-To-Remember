const router = require ("express").Router();
const dolistRoutes = require ("./dolist-api");


// Dolist routes

router.use("/dolist", dolistRoutes);

module.exports = router