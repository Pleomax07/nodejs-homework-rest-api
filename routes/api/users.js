const express = require("express");
const { users } = require("../../controllers");
const { auth, ctrlWrapper } = require("../../middlewares");

const router = express.Router();
console.log(users)
router.get("/current", auth, ctrlWrapper(users));

module.exports = router;
