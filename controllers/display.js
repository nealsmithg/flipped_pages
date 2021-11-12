const router = require("express").Router();
const { Books, User, UserBooks } = require("../models");

router.get("/", async (req, res) => {
  try {
    // api search for books for display carousel

    const booksData = await Books.findAll({ attributes: { exclude: "pages" } });
    const allBooks = booksData.map((book) => book.get({ plain: true }));
    console.log(allBooks);
    res.render("homepage", {
      // data from api
      allBooks,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/about", async (req, res) => {
  res.render("about");
});

router.get("/contact", async (req, res) => {
  res.render("contact");
});

router.get("/mybooks", async (req, res) => {
  try {
    const userBooksData = await User.findAll({
      include: [{ model: Books, through: UserBooks }],
      where: { id: req.session.user_id },
    });

    const userBooks = userBooksData.map((book) => book.get({ plain: true }));

    res.render("mybooks", { userBooks });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/newbook", async (req, res) => {
  res.render("newbook");
});

module.exports = router;
