const router = require ("express").Router();
const dolistRoutes = require ("./dolist-api");
const expensesRoutes = require ("./expenses-api");
const weddingRoutes = require ("./wedding-api");


// Dolist routes

router.use("/dolist", dolistRoutes);
router.use("/expenses", expensesRoutes);
router.use("/wedding", weddingRoutes);


module.exports = router