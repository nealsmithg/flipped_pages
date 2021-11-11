<<<<<<< HEAD
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')

router.use('/', homeRoutes)
router.use('/api', apiRoutes);
=======
const router = require("express").Router();
const apiRoutes = require("./api");
const displayRoutes = require("./display.js");

router.use("/", displayRoutes);
router.use("/api", apiRoutes);
>>>>>>> main

module.exports = router;
