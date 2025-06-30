const accountSid = "ACea4acc7881dbc9394a1199cfb085a951";
const authToken = "7244224925fcf8467a43b8eebcc86b70";
const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Привет! Бекир все еще виноват!",
    from: "+12058508394",
    to: "+998974773825",
  })
  .then((message) => console.log(message.sid));
