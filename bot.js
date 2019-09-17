const Discord = require('discord.js');
const client = new Discord.Client();


const http = require('http');
const port = process.env.PORT;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end('Hello Node.js Server!');
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err);
  }
  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});



client.login(process.env.AUTH);

  client.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply('Pong!');
    console.log("Ping command recieved");
  }
  if (msg.content === '/cat') {
      msg.reply('Meow!');
      console.log('Meow command received');
  }
});

  console.log(`server is listening on ${port}`);
});