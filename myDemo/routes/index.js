var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("demo", { title: "Demo" });
});

router.get("/test", function(req, res, next) {
  res.render("index", { title: "Test" });
});

router.get("/error", function(req, res, next) {
  res.render("error", { title: "Error" });
});

module.exports = router;
