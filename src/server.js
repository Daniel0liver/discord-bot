require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`${bot.user.tag} was started`);
});

bot.on('message', (message) => {
  if (message.content === 'test') {
    message.reply('Oi, eu sou o Goku!');
  }

  if (message.content === 'assiste friends') {
    message.reply(
      'https://media.giphy.com/media/ToMjGpx9F5ktZw8qPUQ/giphy.gif'
    );
  }
});

bot.login(process.env.BOT_TOKEN);
