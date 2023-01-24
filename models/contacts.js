const fs = require("fs").promises;
const path = require("path");

const { v4 } = require("uuid");

const contactsPath = path.join(__dirname, "../db", "contacts.json");

const listContacts = async () => {
  try {
    const content = await fs.readFile(contactsPath, "utf-8");
    const allContacts = JSON.parse(content);

    if (!allContacts.length) {
      console.log("Contact list is empty");
    } else {
      console.log(`Your contacts list (${allContacts.length})`);
      console.log(allContacts);
    }
    return allContacts;
  } catch (error) {
    console.log(error.message);
  }
};

const getContactById = async (id) => {
  try {
    const allContacts = await listContacts();
    const contactById = allContacts.find((contact) => contact.id === id);
    if (contactById) {
      console.log(`contact '${contactById.id}' found`);
      console.log(contactById);
    } else {
      console.log(`contact '${contactById.id}' not found`);
    }

    return contactById;
  } catch (error) {
    console.log(error.message);
  }
};

const removeContact = async (id) => {
  try {
    const allContacts = await listContacts();
    const filterContacts = allContacts.filter((contact) => contact.id !== id);
    if (filterContacts.length === allContacts.length) {
      console.log(`contact '${id}' not found`);
    } else {
      fs.writeFile(contactsPath, JSON.stringify(filterContacts));
      console.log(`contact '${id}' successfully deleted`);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const allContacts = await listContacts();
    const newContact = { id: v4(), name, email, phone };
    const dublicateContact = allContacts.find(
      (contact) => contact.name === name
    );
    if (dublicateContact) {
      console.log(`Contact with name '${name}' already exists!`);
    } else {
      allContacts.push(newContact);
      fs.writeFile(contactsPath, JSON.stringify(allContacts));
      console.log(`Contact with name '${name}' saved!`);
      console.log(newContact);
      return newContact;
    }
  } catch (error) {
    console.log(error.message);
  }
};
const updateContact = async (id, body) => {
  const allContacts = await listContacts();
  const idx = allContacts.findIndex((contact) => contact.id === id);
  if (idx === -1) {
    return null;
  }
  allContacts[idx] = { id, ...body };
  fs.writeFile(contactsPath, JSON.stringify(allContacts));
  return allContacts[idx];
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
