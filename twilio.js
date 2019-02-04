const ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
const AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
const TWILIO_NUMBER = process.env.TWILIO_PHONE_NUMBER

const client = require('twilio')(ACCOUNT_SID, AUTH_TOKEN);

const sendMessage = (to, message, callback) => {
  client.messages
    .create({
      from: TWILIO_NUMBER,
      to,
      mediaUrl: message,
    })
    .then(callback)
    .done();
};

module.exports = {
  sendMessage,
};
