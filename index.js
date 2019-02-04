require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const twilio = require('./twilio.js')

app.use(bodyParser.urlencoded({
  extended: true
}));

const port = process.env.PORT || 3000

const arrayMessage = [
  'https://media.giphy.com/media/dcubXtnbck0RG/giphy.gif',
  'https://media.giphy.com/media/3oz8xAiHifpLt6NpO8/giphy.gif',
  'https://media.giphy.com/media/7WqqX7NMfWGHe/giphy.gif',
  'https://media.giphy.com/media/Cprj15D9UMHde/giphy.gif',
  'https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy-downsized-large.gif',
  'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
  'https://media.giphy.com/media/6gmPRxXCd2Exy/giphy.gif',
  'https://media.giphy.com/media/RK9udF1XhY9L7IZRaZ/giphy.gif',
  'https://media.giphy.com/media/UOk61gfRlI1sA/giphy.gif',
  'https://media.giphy.com/media/eeUJaTwsHh3tswkaYm/giphy.gif',
  'https://media.giphy.com/media/3ohzdMXtoq6s2PnHl6/giphy.gif',
  'https://media.giphy.com/media/laUY2MuoktHPy/giphy.gif',
  'https://media.giphy.com/media/3ojujSzy9u9MTLAbeG/giphy.gif',
  'https://media.giphy.com/media/3o751Yxe9UjX26BZbG/giphy.gif',
  'https://media.giphy.com/media/jUwpNzg9IcyrK/giphy.gif',
  'https://media.giphy.com/media/3oAt2dA6LxMkRrGc0g/giphy.gif',
  'https://media.giphy.com/media/11wsZr0jbXc15m/giphy.gif',
  'https://media.giphy.com/media/HhjtNatuLEsP6/giphy.gif',
  'https://media.giphy.com/media/385FGfqyFXtgQ/giphy.gif',
  'https://media.giphy.com/media/10FwycrnAkpshW/giphy.gif',
  'https://media.giphy.com/media/RxR1KghIie2iI/giphy.gif'
]


// this line of code has nothing to do with the functionality of the app
// it just shows the Twilio logo on Glitch! 

app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'));

app.post('/', (req, res) => {
  const phoneNumber = req.body.From
  var index = Math.floor(Math.random() * (arrayMessage.length - 1));
  twilio.sendMessage(phoneNumber, arrayMessage[index]);

  res.writeHead(200, {'Content-Type': 'image/gif'});
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
