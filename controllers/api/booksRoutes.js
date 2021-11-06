const router = require("express").Router();
const { Books } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const booksData = await Books.findAll();
    res.status(200).json(booksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const booksData = await Books.findByPk(req.params.id);
    if (!booksData) {
      res.status(404).json({ massage: "No book by that ID." });
      return;
    }
    res.status(200).json(booksData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.status(200).json(newBook);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const projectData = await Books.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: "No project found with this id!" });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
