const router = require("express").Router();
const { Books, User, UserBooks } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userBooksData = await User.findAll({
      include: [{ model: Books, through: UserBooks }],
    });
    res.status(200).json(userBooksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userBooksData = await User.findByPk(req.params.id, {
      include: [{ model: Books, through: UserBooks }],
    });
    res.status(200).json(userBooksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", (req, res) => {
  // req.body should look like
  // {
  //     books_id: 4,
  //     read: false,
  //     own: true,
  //     ---------
  //     can have ..
  //     want: true,
  //     heard_about: "text text text"
  // }
  try {
    const newUserBooks = req.body;
    newUserBooks.user_id = req.session.user_id;
    //TODO: delete on finish.
    if (!req.session.user_id) newUserBooks.user_id = 3;
    UserBooks.create(newUserBooks);
    res.status(200).json(newUserBooks);
  } catch (err) {
    res.json(400).json(err);
  }
});

module.exports = router;
