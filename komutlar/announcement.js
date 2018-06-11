const Discord = require('discord.js');

exports.run = (client, message, args) => {
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.reply('You must write something to write!');
    message.delete();
    const embed = new Discord.RichEmbed()
    .setAuthor('')
    .setColor(3447003)
    .setDescription(`${message}`)
    return message.channel.sendEmbed(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['announce', 'announcement'],
  permLevel: 2
};

exports.help = {
  name: 'announcement',
  description: 'Provides a Beautiful Announcement View.',
  usage: 'announcement [Announcement too what write]'
};
