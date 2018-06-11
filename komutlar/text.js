const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('You should write something to write.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'tell'],
  permLevel: 2
};

exports.help = {
  name: 'text',
  description: 'You can print for bot anything you want .',
  usage: 'text [what you want to print]'
};
