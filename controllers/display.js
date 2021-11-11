const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    // api search for books for display carousel

    res.render("main", {
      // data from api
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
