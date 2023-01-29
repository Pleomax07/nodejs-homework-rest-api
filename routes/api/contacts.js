const express = require("express");
const router = express.Router();
const { contacts: ctrl } = require("../../controllers");

const {validation, ctrlWrapper} = require('../../middlewares')
const {JoiContactSchema} = require('../../models/contact')


router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:contactId", ctrlWrapper(ctrl.getContactById));

router.post("/", validation(JoiContactSchema), ctrlWrapper(ctrl.addContact));

router.put("/:contactId", validation(JoiContactSchema), ctrlWrapper(ctrl.updateById));

router.delete("/:contactId", ctrlWrapper(ctrl.removeById));

module.exports = router;
