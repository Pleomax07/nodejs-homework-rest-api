require("dotenv").config();
const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "pleomax250193@gmail.com" };
  try {
    sgMail.send(email);
    return true;
  } catch (error) {
    console.log(error);
  }
};

// const email = {
//   to: 'pleomax07@meta.ua',
//   from: 'pleomax250193@gmail.com',
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };

module.exports = sendEmail;
