const express = require("express");
const { users } = require("../../controllers");
const { auth, upload, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.get("/current", auth, ctrlWrapper(users.getCurrent));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(users.updateAvatar));

module.exports = router;
