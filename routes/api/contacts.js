const express = require("express");
const { contacts: ctrl } = require("../../controllers");
const { auth, validation, ctrlWrapper } = require("../../middlewares");
const { JoiContactSchema } = require("../../models/contact");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post(
  "/",
  auth,
  validation(JoiContactSchema),
  ctrlWrapper(ctrl.addContact)
);

router.put(
  "/:contactId",
  validation(JoiContactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

module.exports = router;
