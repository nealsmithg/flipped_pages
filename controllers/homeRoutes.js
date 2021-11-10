const router = require("express").Router();
const { Books, UserBooks } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const booksData = await Books.findAll({
      include: [
        {
          model: UserBooks,
          attributes: books_id,
        },
      ],
    });
    const books = booksData.map((Books) => books.get({ plain: true }));

    res.render("homepage", {
      books,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
