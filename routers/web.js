const path = require("path");
const router = require("express").Router();
router.get("/", function (req, res) {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

module.exports = router;
  