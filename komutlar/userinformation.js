const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (message.channel.type !== "group") {
        var Durum = message.author.presence.status;
        var Durm = (Durum == "online" ? (0x00AE86) : (Status == "offline" ? (0x808080) : (Status == "idle" ? (0xFFFF00) : (Status == "dnd" ? (0xFF0000) : (0x00AE86)))))
        var durm = (Durum == "online" ? ("Online") : (Status == "offline" ? ("Offine") : (Status == "idle" ? ("idled") : (Status == "dnd" ? ("Do not bother") : ("Unknown/Notfound.")))))
      const kullanicibilgimk = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setColor(Durm)
      .setTimestamp()
      .addField('Name:', message.author.username + '#' + message.author.discriminator)
      .addField('ID:', message.author.id)
      .addField('Date of registration:', message.author.createdAt)
      .addField('Status:', durm)
      .addField('Currently playing game:', message.author.presence.game ? message.author.presence.game.name : 'He s not playing games right now.')
      .addField('BOT ?', message.author.bot ? '\n Yes' : 'No')
      console.log("!userinformation Command " + message.author.username + " Used by.")
      return message.channel.sendEmbed(kullanicibilgimk);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['user', 'user information', 'uinformation'],
  permLevel: 0
};

exports.help = {
  name: 'userinformation',
  description: 'Information the person who uses the command.',
  usage: 'userinformation'
};
