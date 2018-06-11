const Discord = require('discord.js');
exports.run = function(client, message, args) {
  if (!message.guild) {
    return message.author.send('`clean` command can only be used on servers.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('you not saying how many i delete message.')
  if (mesajsayisi > 100) return message.channel.send('I can not delete more than 100 messages!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' i deleted message!')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['delete'],
  permLevel: 2
};

exports.help = {
  name: 'clean',
  description: 'The specified amount deletes the message.',
  usage: 'clean <number of messages to clean>'
};
