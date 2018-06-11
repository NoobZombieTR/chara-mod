const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {

	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField(':warning: Uyarı :warning:', '`sunucubilgi` adlı komutu özel mesajlarda kullanamazsın.')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField('Server Name:', message.guild.name)
    .addField('Server ID:', message.guild.id)
    .addField('Main channel:', message.guild.defaultChannel)
    .addField('Server Territory:', message.guild.region)
    .addField('Number of members:', message.guild.memberCount)
    .addField('Owner:', message.guild.owner + ' (' + message.guild.ownerID + ')')
    .addField('Number of Channel:', message.guild.channels.size)
    .addField('Creation date:', message.guild.createdAt)
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['server', 'sunucu information', 'sinformation'],
  permLevel: 0
};

exports.help = {
  name: 'serverinformation',
  description: 'Provides information about the server.',
  usage: 'server information'
};
