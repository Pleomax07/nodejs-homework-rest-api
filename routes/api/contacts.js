const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");

const {validation, ctrlWrapper} = require('../../middlewares')
const {JoiContactSchema, favoriteJoiSchema} = require('../../models/contact')


router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(JoiContactSchema), ctrlWrapper(ctrl.addContact));

router.put("/:contactId", validation(JoiContactSchema), ctrlWrapper(ctrl.updateById));

router.patch("/:contactId/favorite", validation(favoriteJoiSchema), ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

module.exports = router;
