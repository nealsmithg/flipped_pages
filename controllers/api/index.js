const router = require("express").Router();
const userRoutes = require("./userRoutes");
const booksRoutes = require("./booksRoutes");
const userBooksRoutes = require("./userBooksRoutes");

router.use("/users", userRoutes);
router.use("/books", booksRoutes);
router.use("/userbooks", userBooksRoutes);

module.exports = router;
