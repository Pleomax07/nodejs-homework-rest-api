const createError = require("http-errors");
const { Contact } = require("../../models");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    throw createError(404, `Contact with id=${contactId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: `contact with ${contactId} deleted`,
    data: {
      result,
    },
  });
};

module.exports = removeById;
