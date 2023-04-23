var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "BillSpotter" });
});

/* GET privacy policy */
router.get("/privacy", function (req, res, next) {
  res.render("privacy", { title: "BillSpotter" });
});

module.exports = router;
