const Discord = require('discord.js');
exports.run = function(client, message, args) {
  message.reply('your ping :)! **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'bot show ping.',
  usage: 'ping'
};
