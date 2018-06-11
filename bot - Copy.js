?const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix;

client.on('ready', () => {
  console.log(`BOT ${client.user.username}logged in with name!`);
});

client.on('message', msg => {

  if (!msg.content.startsWith(prefix)) {
	  return
  }
  if (msg.content === prefix + 'Good morning') {
    msg.reply('Good morning!');

  }

    if (msg.content === prefix + 'Hello Bot') {
    msg.reply('hello im chara bot :p !');

  }

  if (msg.content === prefix + 'hi bot') {
    msg.reply('hi im chara bot :p!');

  }

  if (msg.content === prefix + 'ping') {
    msg.reply('your ping **' + client.ping + '** ms');

  }


});

client.login(ayarlar.token);
