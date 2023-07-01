const express = require("express");
const router = express.Router();
const db = require("../scripts/db");

router.get("/populate", db.populate);
router.get("/clear", db.clear);

module.exports = router;
