const path = require ("path");
const router = require ("express").Router();
const user = require ("./user");
const apiRoutes = require("./api");

 router.use("/api", apiRoutes);
 router.use("/user", user)



router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
  });

  
  module.exports = router