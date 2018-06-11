const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField(':warning: Warning :warning:', '`warning` You can not use the command in private messages.')
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = guild.channels.find('name', 'mod-log');
  if (!modlog) return message.reply('`mod-log` i cant find mod-log channel.');
  if (reason.length < 1) return message.reply('You must write the reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You should write who to warn.').catch(console.error);
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .addField('act:', 'Do give a warning')
  .addField('User:', `${user.username}#${user.discriminator}`)
  .addField('Authorized:', `${message.author.username}#${message.author.discriminator}`)
  .addField('Reason', reason);
  return guild.channels.get(modlog.id).sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warning',
  description: 'Warn the person you want.',
  usage: 'warning [user] [reason]'
};
