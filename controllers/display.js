const router = require("express").Router();
const { Books, User, UserBooks } = require("../models");

router.get("/", async (req, res) => {
  try {
    // api search for books for display carousel

    const booksData = await Books.findAll({
      attributes: { exclude: "pages" },
      limit: 10,
    });
    const allBooks = booksData.map((book) => book.get({ plain: true }));
    res.render("homepage", {
      // data from api
      allBooks,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", async (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

router.get("/searchbooks", async (req, res) => {
  res.render("searchbooks");
});

router.get("/bookresult", async (req, res) => {
  res.render("bookresult");
});

router.get("/forms", async (req, res) => {
  res.render("forms", { logged_in: req.session.logged_in });
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
