const createError = require("http-errors");
const contactsOperations = require("../../models/contacts");

const removeById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contactsOperations.removeContact(contactId);
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
