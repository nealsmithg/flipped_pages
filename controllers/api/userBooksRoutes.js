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

router.post("/", (req, res) => {});

module.exports = router;
