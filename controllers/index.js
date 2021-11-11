const router = require("express").Router();
const apiRoutes = require("./api");
const displayRoutes = require("./display.js");

router.use("/display", displayRoutes);
router.use("/api", apiRoutes);

module.exports = router;
