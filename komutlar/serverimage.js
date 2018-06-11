const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`serverimage` You can not use the command in private messages.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.guild.name)
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
		.setImage(`${message.guild.iconURL} `)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server-pp'],
  permLevel: 0
};

exports.help = {
  name: 'serverimage',
  description: 'server image link throws.',
  usage: 'serverimage'
};
